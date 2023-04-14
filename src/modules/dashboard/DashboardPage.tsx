import { Box, Grid } from '@mui/material';
import React from 'react';

import { DishCard } from './components/dishes';

const DashboardPage: React.FC = () => {
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
          <DishCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
