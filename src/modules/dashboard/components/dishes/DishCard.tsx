import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import React from 'react';

const DishCard: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 275, borderRadius: '0.6rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="158"
          image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
          alt="Mock dish"
        />
        <CardContent>
          <Typography
            fontWeight="500"
            variant="body1"
            component="h3"
            gutterBottom
            align="center"
          >
            Salad
          </Typography>
          <Typography
            variant="body2"
            component="p"
            align="center"
            gutterBottom
          >
            $2.99
          </Typography>
          <Typography
            variant="caption"
            component="p"
            align="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            quos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DishCard;
