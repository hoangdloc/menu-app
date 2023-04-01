import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import AdminAppBar from './AdminAppBar';
import AdminDrawHeader from './AdminDrawHeader';
import AdminSidebar from './AdminSidebar';

const DashboardLayout: React.FC = () => {
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
        sx={{ flexGrow: 1, p: 3 }}
      >
        <AdminDrawHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
