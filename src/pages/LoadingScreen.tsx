import { Box, CircularProgress, styled } from '@mui/material';
import React from 'react';

const LoadingScreenStyles = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.customColors.bgColorPrimary
}));

const LoadingScreen: React.FC = () => {
  return (
    <LoadingScreenStyles>
      <CircularProgress size={100} />
    </LoadingScreenStyles>
  );
};

export default LoadingScreen;
