import { Box, Grid } from '@mui/material';
import React, { Fragment } from 'react';
import { v4 } from 'uuid';

import { Dish } from '../../shared/@types/dish';
import { useFetchDishesQuery } from '../../store/dish/dishService';
import { DishCard } from './components/dishes';
import DishCardSkeleton from './components/dishes/DishCardSkeleton';

const DashboardPage: React.FC = () => {
  const { data, isFetching } = useFetchDishesQuery();

  const renderDishCards = data?.map((dish: Dish) => (<Grid
    item
    lg={3}
    md={4}
    sm={6}
    xs={12}
    key={v4()}
  >
    <DishCard dishData={dish} />
  </Grid>));

  return (
    <Box>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={2}
      >
        {(isFetching && renderDishCards == null) ? <DashboardSkeleton /> : null}
        {(!isFetching && renderDishCards != null) ? renderDishCards : null}
      </Grid>
    </Box>
  );
};

const DashboardSkeleton: React.FC = () => {
  const skeletonNum = 8;
  const skeletonArray = new Array(skeletonNum).fill(0);

  return (
    <Fragment>
      {skeletonArray.map((_, index) => (
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          xs={12}
          key={index}
        >
          <DishCardSkeleton />
        </Grid>
      ))}
    </Fragment>
  );
};

export default DashboardPage;
