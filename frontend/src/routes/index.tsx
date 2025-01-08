import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import Questionnaire from '../pages/Questionnaire';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/questionnaire',
        element: <Questionnaire />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]); 