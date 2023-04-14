import { styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import React from 'react';

import { DISH_DRAWER_WIDTH } from '.';
import MyEmpty from '../../../../shared/components/empty';
import AdminDrawHeader from '../layouts/AdminDrawHeader';

const Drawer = styled(MuiDrawer)(() => ({
  display: 'block',
  width: DISH_DRAWER_WIDTH,
  overflowX: 'hidden',
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: DISH_DRAWER_WIDTH,
    overflowX: 'hidden'
  }
}));

const DishStatisticsDrawer: React.FC = () => {
  return (
    <Drawer
      anchor="right"
      variant="permanent"
      open
    >
      <AdminDrawHeader />
      <MyEmpty />
    </Drawer>
  );
};

export default DishStatisticsDrawer;
