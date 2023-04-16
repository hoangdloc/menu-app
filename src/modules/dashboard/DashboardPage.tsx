import { Box, Grid } from '@mui/material';
import React from 'react';

import { useFetchDishesQuery } from '../../store/dish/dishService';
import { DishCard } from './components/dishes';
import DishCardSkeleton from './components/dishes/DishCardSkeleton';

const DashboardPage: React.FC = () => {
  const { data, isFetching } = useFetchDishesQuery();
  console.log(data);

  return (
    <Box>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={2}
      >
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          {isFetching ? <DishCardSkeleton /> : <DishCard />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
