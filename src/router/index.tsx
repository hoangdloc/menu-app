import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import LoadingScreen from '../pages/LoadingScreen';

const AdminLayout = lazy(async () => await import('../modules/dashboard/components/layouts'));
const DashboardPage = lazy(async () => await import('./../modules/dashboard/DashboardPage'));
const MenuPage = lazy(async () => await import('./../pages/MenuPage'));
const ErrorPage = lazy(async () => await import('./../pages/ErrorPage'));

const AppWrapper: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
};

export default createBrowserRouter([
  {
    element: <AppWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MenuPage />
      },
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />
          },
          {
            path: 'manage-ingredients',
            element: <div>Not done yet!</div>
          },
          {
            path: 'settings',
            element: <div>Just toggle dark mode!</div>
          }
        ]
      }
    ]
  }
]);
