import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { DishInfoDrawer, DishStatisticsDrawer } from '../dishes';
import AdminAppBar from './AdminAppBar';
import AdminDrawHeader from './AdminDrawHeader';
import AdminSidebar from './AdminSidebar';

const DashboardLayout: React.FC = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminAppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <AdminSidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 4 }}
      >
        <AdminDrawHeader />
        <Outlet />
      </Box>
      {pathname === '/admin' ? <DishStatisticsDrawer /> : null}
      {pathname === '/admin/manage-dishes' ? <DishInfoDrawer /> : null}
    </Box>
  );
};

export default DashboardLayout;
