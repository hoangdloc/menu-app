import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import {
  Box,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Stack,
  Typography
} from '@mui/material';
import React, { Fragment } from 'react';

import { Dish } from '../../../../shared/@types/dish';
import MyCarousel from '../../../../shared/components/carousel';

const DishInfoContent: React.FC<{ dishData: Dish }> = ({ dishData }) => {
  const renderIngredients = dishData.ingredients
    .map((ingredient) => ingredient.name)
    .join(', ');

  return (
    <Fragment>
      <MyCarousel
        parentAltText={dishData.name}
        imagePaths={dishData.images}
      />
      <Box sx={{ padding: '0.2rem 0.8rem' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Stack>
            <Typography
              variant="h6"
              component="h1"
            >
              {dishData.name}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
            >
              <Typography
                variant="body2"
                component="span"
                sx={{
                  color: '#FAAF00',
                  fontWeight: 700,
                  marginRight: '-0.2rem'
                }}
              >
                {dishData.ratingsAverage}
              </Typography>
              <Rating
                value={dishData.ratingsAverage}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography
                variant="caption"
                component="span"
                sx={(theme) => ({
                  color: theme.customColors.textColorSecondary
                })}
              >{`(${dishData.ratingsQuantity})`}</Typography>
            </Stack>
          </Stack>
          <Chip
            size="small"
            icon={<PaidIcon />}
            color="primary"
            variant="outlined"
            label={dishData.price}
          />
        </Box>
        <Typography
          variant="body2"
          component="p"
          sx={{ marginTop: '1rem' }}
        >
          {dishData.description}
        </Typography>
        <Divider
          sx={{ margin: '1rem 0' }}
          role="presentation"
          light
        >
          More Informations
        </Divider>
        <Grid
          container
          spacing={1}
          columns={2}
        >
          <Grid
            item
            xs={1}
          >
            <List dense>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <DiningOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Dish type"
                  secondary={dishData.dishType}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={1}
          >
            <List dense>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Cooking time"
                  secondary={`${dishData.cookingTime} ${
                    dishData.cookingTime > 1 ? 'minutes' : 'minute'
                  }`}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={1}
          >
            <List dense>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <PeopleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Servings"
                  secondary={`${dishData.servings} people`}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={1}
          >
            <List dense>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <LocalGroceryStoreOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Ingredients"
                  secondary={renderIngredients}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default DishInfoContent;
