import LoadingFullPage from "Components/LoadingFullPage"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

import { Router } from "Routes"

const RegisterPage = lazy(() => import("./SignUpPage"))

export const Login: Router = ({
  match,
}) => {
  const { path = "/signup" } = match ?? {}
  
  return (
    <Switch>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <RegisterPage />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Login
