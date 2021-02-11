import React from 'react'
import { hydrate } from 'react-dom'
import ReactGA from 'react-ga'
import { BrowserRouter } from 'react-router-dom'

import RootPage from 'pages/RootPage'

const TRACK_ID = 'UA-148381540-3'

ReactGA.initialize(TRACK_ID)

hydrate(
  <BrowserRouter>
    <RootPage />
  </BrowserRouter>,
  document.getElementById('root')
)
