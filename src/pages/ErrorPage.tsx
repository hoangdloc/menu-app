import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const ErrorPageBox = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.customColors.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
  '& > .title': {
    fontSize: '3.6rem'
  },
  '& > .content': {
    fontSize: '1.2rem'
  },
  '& > .status': {
    fontSize: '1rem',
    fontStyle: 'italic',
    color: theme.customColors.tertiary
  }
}));

const ErrorPage: React.FC = () => {
  return (
    <ErrorPageBox>
      <Typography
        className="title"
        variant="h2"
        component="h1"
      >
        Oops!
      </Typography>
      <Typography
        className="content"
        variant="body1"
        component="p"
      >
        Sorry, an unexpected error has occured
      </Typography>
      <Typography
        className="status"
        variant="body2"
        component="span"
      >
        Not found
      </Typography>
    </ErrorPageBox>
  );
};

export default ErrorPage;
