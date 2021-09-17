import React, { lazy, Suspense } from "react"
import { Route, RouteComponentProps, Switch, Redirect } from "react-router-dom";

import { Router } from "Routes"

import usePageview from "Hooks/usePageView"
import { useCurrentUserToken } from "Context/LoggedUserToken";
import LoadingFullPage from "Components/LoadingFullPage";

const PersonalProfilePage = lazy(() => import("./PersonalProfilePage"))
const UsersProfilePage = lazy(() => import("./UsersProfilePage"))

export const Profile: Router = ({
  match,
}) => {
  const { token } = useCurrentUserToken()
  const { path = "/profile" } = match ?? {}
  usePageview({ name: 'profile', path: path });

  if (!token) return <Redirect to="/" />

  return (
    <Switch>
      <Route path={[`${path}/eu`, `${path}/me`]}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <PersonalProfilePage token={token}/>
          </Suspense>
        )}
      </Route>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <PersonalProfilePage token={token}/>
          </Suspense>
        )}
      </Route>

      <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<LoadingFullPage />}>
            <UsersProfilePage id={String(match?.params.id)} token={token} />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Profile
