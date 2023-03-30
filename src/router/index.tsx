import { ScopedCssBaseline, ThemeProvider } from '@mui/material';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import { theme } from '../config/colors';
import LoadingScreen from '../pages/LoadingScreen';

const DashboardPage = lazy(async () => await import('../pages/DashboardPage'));
const MenuPage = lazy(async () => await import('../pages/MenuPage'));
const ErrorPage = lazy(async () => await import('../pages/ErrorPage'));

const SuspenseWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingScreen />}>
        <ScopedCssBaseline>
          <Outlet />
        </ScopedCssBaseline>
      </Suspense>
    </ThemeProvider>
  );
};

export default createBrowserRouter([
  {
    element: <SuspenseWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MenuPage />,
      },
      {
        path: '/admin',
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
]);
