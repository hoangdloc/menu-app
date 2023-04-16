import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton
} from '@mui/material';
import React from 'react';

const DishCardSkeleton: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 275, borderRadius: '0.6rem' }}>
      <CardActionArea>
        <CardMedia>
          <Skeleton
            animation="wave"
            height={158}
          />
        </CardMedia>
        <CardContent>
          <Skeleton
            animation="wave"
            height={10}
            width="40%"
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            animation="wave"
            height={10}
            width="40%"
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            animation="wave"
            height={10}
            width="100%"
          />
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DishCardSkeleton;
