import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'pages/HomePage'
import GlobalStyles from 'common/styles/globalStyles'
import Navbar from './components/Navbar'

const RootPage = () => {
  return (
    <>
      <Navbar />
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default RootPage
