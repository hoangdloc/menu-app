import { styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import React from 'react';
import { useSelector } from 'react-redux';

import { DISH_DRAWER_WIDTH } from '.';
import { Dish } from '../../../../shared/@types/dish';
import MyCarousel from '../../../../shared/components/carousel';
import MyEmpty from '../../../../shared/components/empty';
import { RootState } from '../../../../store/store';
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

const DishInfoDrawer: React.FC = () => {
  const currentDish = useSelector((state: RootState) => state.dish.currentDish);

  return (
    <Drawer
      anchor="right"
      variant="permanent"
      open
    >
      <AdminDrawHeader />
      {currentDish == null ? <MyEmpty /> : null}
      {currentDish != null ? <DishInfoContent dishData={currentDish} /> : null}
    </Drawer>
  );
};

const DishInfoContent: React.FC<{ dishData: Dish }> = ({ dishData }) => {
  return <MyCarousel parentAltText={dishData.name} imagePaths={dishData.images} />;
};

export default DishInfoDrawer;
