import React from 'react'
import { theme } from './Theme'
import { Grommet } from 'grommet'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Wrapper, Main } from './hooks/useGlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Nav } from './components/imports'
import {
  P404,
  Home,
  Dash,
  Profile,
  Checkout,
  Login,
  Register,
  SendResetMAil,
  ResetPassword,
} from './views/imports'
import { AuthProvider } from './global/exports'

import PrivateRoute from './routes/PrivateRoute'
import ProtectedRoute from './routes/ProtectedRoute'
import ControlledRoute from './routes/ControlledRoute'

function App() {
  return (
    <>
      <Grommet>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Main>
              <AuthProvider>
                <Router>
                  <Nav />

                  <Switch>
                    <Route path='/checkout' component={Checkout} />
                    <ProtectedRoute path='/dash' component={Dash} />
                    <ControlledRoute path='/profile' component={Profile} />
                    <PrivateRoute
                      path='/password/reset'
                      component={ResetPassword}
                    />
                    <PrivateRoute
                      path='/password/mail'
                      component={SendResetMAil}
                    />
                    <PrivateRoute path='/register' component={Register} />
                    <PrivateRoute path='/login' component={Login} />
                    <Route exact path='/' component={Home} />
                    <Route path='*' component={P404} />
                  </Switch>
                </Router>
              </AuthProvider>
            </Main>
          </Wrapper>
        </ThemeProvider>
      </Grommet>
    </>
  )
}

export default App
