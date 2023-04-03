import { Box } from '@mui/material';
import React from 'react';

import DishCard from './components/dishes/DishCard';

const DashboardPage: React.FC = () => {
  console.log(import.meta.env.FIREBASE_API_KEY);
  return (
    <Box>
      <DishCard />
    </Box>
  );
};

export default DashboardPage;
