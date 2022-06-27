import React from 'react';
import Nomatch from './pages/Nomatch';
import Homepage from './pages/Homepage';

const routes = [
  {
    path: '/', title: 'Homepage', element: <Homepage />, exact: 'true',
  },
  { path: '*', title: './pages/Nomatch', element: <Nomatch /> },
];

export default routes;
