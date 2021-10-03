import React, { FC, lazy, Suspense } from 'react'
import {
  BrowserRouter as BaseRouter,
  match,
  Route,
  Switch,
} from 'react-router-dom'

import LoadingFullPage from 'Components/LoadingFullPage'
import { showAboutUs, showBlog, showCourses, showEditProfile, showForgotPassword, showObservatorio } from 'FeatureFlags'

const Home = lazy(() => import('./Home'))
// const PeopleExample = lazy(() => import("./PeopleExample"))
// const SingletonExample = lazy(() => import("./SingletonExample"))
const Blog = lazy(() => import("./Blog"))
const Observatorio = lazy(() => import('./Observatorio'))
const AboutUs = lazy(() => import("./AboutUs"))
const Classes = lazy(() => import("./Classes"))
const NotFound = lazy(() => import("../Pages/NotFound"))
const Register = lazy(() => import('./SignUp'))
const Login = lazy(() => import('./Login'))
const EmailConfirmation = lazy(() => import('./ConfirmEmail'))
const Profile = lazy(() => import('./Profile'))
const Recover = lazy(() => import("./PasswordRecover"));
const EditProfile = lazy(() => import('./EditProfile'))
const UserSearch = lazy(() => import("./UserSearch"))

export type RouterProps<MatchParams = {}> = {
  history?: History
  location?: Location
  match: match<MatchParams> | null
}
export type Router<T = {}> = FC<RouterProps<T>>

const Routes: FC = () => {
  return (
    <BaseRouter>
      <Switch>
        {/* default route */}
        <Route exact path="/">
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Home match={match} />
            </Suspense>
          )}
        </Route>

        {/* home router */}
        <Route path={['/home']}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Home match={match} />
            </Suspense>
          )}
        </Route>

        {/* blog router */}
        {showBlog && (
          <Route path={['/blog']}>
            {({ match }) => (
              <Suspense fallback={<LoadingFullPage />}>
                <Blog match={match} />
              </Suspense>
            )}
          </Route>
        )}

        {/* observatorio router */}
        {showObservatorio && (
          <Route path={['/observatorio']}>
            {({ match }) => (
              <Suspense fallback={<LoadingFullPage />}>
                <Observatorio match={match} />
              </Suspense>
            )}
          </Route>
        )}

        {/* classes router */}
        { showCourses &&
        <Route path={["/classes"]}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Classes match={match} />
            </Suspense>
          )}
        </Route>
        }

        {/* strapi collection example router */}
        {/* <Route path="/people-example">
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <PeopleExample match={match} />
            </Suspense>
          )}
        </Route> */}

        {/* strapi collection example router */}
        {/* <Route path="/singleton-example">
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <SingletonExample match={match} />
            </Suspense>
          )}
        </Route> */}

        {showAboutUs && (
          <Route
            path={['/aboutus', '/about-us', '/sobre-nos', '/sobre', '/about']}
          >
            {({ match }) => (
              <Suspense fallback={<LoadingFullPage />}>
                <AboutUs match={match} />
              </Suspense>
            )}
          </Route>
        )}

        <Route path={["/sign-up", "/signup", "/SignUp", "/cadastro", "/cadastre-se"]}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Register match={match} />
            </Suspense>
          )}
        </Route>
        
        <Route path={['/perfil', '/profile']}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Profile match={match} />
            </Suspense>
          )}
        </Route>

        { showEditProfile && <Route path={['/edit-profile', '/editar-perfil']}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <EditProfile match={match} />
          </Suspense>
          )}
        </Route>}

        <Route path={["/login", "/SignIn", "/logar", "/entrar"]}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
                <Login match={match} />
            </Suspense>
          )}
        </Route>

        {/* email confirmation router */}
        <Route path={['/email-confirmation', '/confirmação-email']}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <EmailConfirmation match={match} />
            </Suspense>
          )}
        </Route>

        {/* recover router */}
        { showForgotPassword && <Route path={["/recover", "/forgot-password", "/password-reset","/criar-nova-senha"]}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Recover match={match} />
            </Suspense>
          )}
        </Route>}

        {/* user search */}
        <Route path={["/banco-profissionais", "/user-search", "/busca-usuários", "/professionals", "/busca-profissionais"]}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <UserSearch match={match} />
            </Suspense>
          )}
        </Route>

        {/* default route (404) */}
        <Route>
          <Suspense fallback={<LoadingFullPage />}>
            <NotFound />
          </Suspense>
        </Route>

      </Switch>
    </BaseRouter>
  )
}

export default Routes
