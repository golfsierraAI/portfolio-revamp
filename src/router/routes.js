import React from 'react';
import {  createBrowserRouter } from 'react-router-dom';
import NotFound from '../commonComponents/notFound';
import Resume from '../pages/resume';
import Shelf from '../pages/shelf';
import Work from '../pages/work';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'shelf',
        element: <Shelf />,
      },
      { path: 'résumé', element: <Resume /> },
      { path: 'work', element: <Work /> },
    ],
  },
]);

export default router;
