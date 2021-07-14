import React, { FC, lazy, Suspense, useEffect } from 'react'
import {
  BrowserRouter as BaseRouter,
  match,
  Route,
  Switch,
} from "react-router-dom"

import Loading from 'Components/Loading'

import RouteTracker from 'Utils/RouteTracker';

import ReactGA from 'react-ga';



const Home = lazy(() => import('./Home'))
const Blog = lazy(() => import('./Blog'))
const PeopleExample = lazy(() => import('./PeopleExample'))
const SingletonExample = lazy(() => import('./SingletonExample'))
const AboutUs = lazy(() => import('./AboutUs'))

export type RouterProps<MatchParams = {}> = {
  history?: History,
  location?: Location,
  match: match<MatchParams> | null,
}
export type Router<T = {}> = FC<RouterProps<T>>

const Routes: FC = () => {

  useEffect(() => {
    ReactGA.initialize('UA-200607957-1')
  })

  return (
    <BaseRouter>
      <RouteTracker>
        <Switch>
          
          {/* default route */}
          <Route exact path="/">
              {({ match }) => (
                <Suspense fallback={<Loading />}>
                  <Home match={match}/>
                </Suspense> 
              )}
          </Route>
          
          {/* home router */}
          <Route path={["/home"]}>
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Home match={match}/>
              </Suspense> 
            )}
          </Route>

          {/* blog router */}
          <Route path={["/blog"]}>
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <Blog match={match}/>
              </Suspense> 
            )}
          </Route>

          {/* strapi collection example router */}
          <Route path="/people-example">
              {({ match }) => (
                <Suspense fallback={<Loading />}>
                  <PeopleExample match={match} />
                </Suspense>
              )}
          </Route>

          {/* strapi collection example router */}
          <Route path="/singleton-example">
              {({ match }) => (
                <Suspense fallback={<Loading />}>
                  <SingletonExample match={match} />
                </Suspense>
              )}
          </Route>

          <Route path={["/aboutus", "/about-us", "/sobre-nos", "/sobre", "/about"]}>
            {({ match }) => (
              <Suspense fallback={<Loading />}>
                <AboutUs match={match} />
              </Suspense>
            )          }
          </Route>
        </Switch>
      </RouteTracker>
    </BaseRouter>
  )
}

export default Routes
