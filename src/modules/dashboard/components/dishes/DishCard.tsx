import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Dish } from '../../../../shared/@types/dish';
import { setCurrentDish } from '../../../../store/dish/dishSlice';

interface DishCardProps {
  dishData: Dish
}

const DishCard: React.FC<DishCardProps> = (props) => {
  const { dishData } = props;
  const dispatch = useDispatch();

  const handleSetCurrentDish = (dish: Dish): void => {
    dispatch(setCurrentDish(dish));
  };

  return (
    <Card
      onClick={() => {
        handleSetCurrentDish(dishData);
      }}
      sx={{ maxWidth: 275, borderRadius: '0.6rem' }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="158"
          image={dishData.thumbnail}
          alt={dishData.name}
        />
        <CardContent>
          <Typography
            fontWeight="500"
            variant="body1"
            component="h3"
            gutterBottom
            align="center"
          >
            {dishData.name}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            align="center"
            gutterBottom
          >
            ${dishData.price}
          </Typography>
          <Typography
            variant="caption"
            component="p"
            align="center"
          >
            {dishData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DishCard;
