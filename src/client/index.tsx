import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { hydrate } from 'react-dom'
import RootPage from 'pages/RootPage'

hydrate(
  <BrowserRouter>
    <RootPage />
  </BrowserRouter>,
  document.getElementById('root')
)
