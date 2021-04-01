import React from 'react'
import ReactDOM from 'react-dom'
import { primer } from '@papillonads/components'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { checkAccessibilityIssues } from '@papillonads/library/a11y'
import { startPagePath } from './route/path'
import { appRootRoute, listCarPageRoute, notFoundPageRoute } from './route'
import { clientAppStore } from './store/client'

/* istanbul ignore next */
export function App() {
  const { ErrorBoundary } = primer

  return (
    <ErrorBoundary>
      <Provider store={clientAppStore}>
        <BrowserRouter>
          <Switch>
            <Route exact={appRootRoute.exact} path={appRootRoute.path}>
              <Redirect to={startPagePath} />
            </Route>
            <Route exact={listCarPageRoute.exact} path={listCarPageRoute.path} component={listCarPageRoute.clientComponent} />
            <Route component={withRouter(notFoundPageRoute.clientComponent)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.hydrate(<App />, document.getElementById('app'))

  if (module.hot) {
    module.hot.accept()
  }
}

renderApp()
