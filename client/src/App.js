import React from 'react'
import { lightTheme, darkTheme } from './Theme'
import { ThemeProvider } from 'styled-components'
import { useThemeToggler } from './hooks/useThemeToggler'
import { GeistProvider } from '@geist-ui/react'
import { GlobalStyle, Wrapper, Main } from './hooks/useGlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Nav, Footer, CockiesBanner } from './components/imports'
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
  Artisan,
  Organic,
  BeautyProduct,
  Cosmetic,
  OtherDomains,
  SingleProduct,
  NewsAndBlogs,
  WishList,
} from './views/imports'

import {
  AuthProvider,
  CrudProvider,
  CartProvider,
  ProdProvider,
} from './global/exports'

import PrivateRoute from './routes/PrivateRoute'
import ProtectedRoute from './routes/ProtectedRoute'
import ControlledRoute from './routes/ControlledRoute'

function App() {
  const [theme, toggleTheme, componentMounted] = useThemeToggler()

  if (!componentMounted) {
    return <div />
  } else {
    return (
      <>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <GeistProvider>
            <GlobalStyle />
            <Wrapper>
              <Main>
                <CockiesBanner />
                <AuthProvider>
                  <CrudProvider>
                    <ProdProvider>
                      <CartProvider>
                        <Router>
                          <Nav mode={theme} modeFunc={toggleTheme} />
                          <Switch>
                            <Route
                              path='/news/:id/:title'
                              component={NewsAndBlogs}
                            />
                            <Route
                              path='/product/:id/:type/:name'
                              component={SingleProduct}
                            />
                            <Route path='/others' component={OtherDomains} />
                            <Route path='/cosmetic' component={Cosmetic} />
                            <Route
                              path='/beautyproduct'
                              component={BeautyProduct}
                            />
                            <Route path='/organic' component={Organic} />
                            <Route path='/artisan' component={Artisan} />
                            <Route path='/checkout' component={Checkout} />

                            <ProtectedRoute path='/dash' component={Dash} />
                            <ControlledRoute
                              path='/wishlist'
                              component={WishList}
                            />
                            <ControlledRoute
                              path='/profile'
                              component={Profile}
                            />
                            <PrivateRoute
                              path='/password/reset'
                              component={ResetPassword}
                            />
                            <PrivateRoute
                              path='/password/mail'
                              component={SendResetMAil}
                            />
                            <PrivateRoute
                              path='/register'
                              component={Register}
                            />
                            <PrivateRoute path='/login' component={Login} />
                            <Route exact path='/' component={Home} />
                            <Route path='*' component={P404} />
                          </Switch>
                          <Footer />
                        </Router>
                      </CartProvider>
                    </ProdProvider>
                  </CrudProvider>
                </AuthProvider>
              </Main>
            </Wrapper>
          </GeistProvider>
        </ThemeProvider>
      </>
    )
  }
}

export default App
