import { Box } from '@mui/material';
import React from 'react';

import DishCard from './components/dishes/DishCard';

const DashboardPage: React.FC = () => {
  return (
    <Box>
      <DishCard />
    </Box>
  );
};

export default DashboardPage;
