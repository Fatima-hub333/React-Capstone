import React from 'react'
import Nomatch from './pages/Nomatch'

const routes = [
  { path: '/', title: 'Homepage', element: <Homepage />, exact: 'true' },
  { path: '*', title: './pages/Nomatch', element: <Nomatch /> },
];

export default routes;