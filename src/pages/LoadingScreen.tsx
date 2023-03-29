import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingScreenStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfe6e9;
`;

const LoadingScreen: React.FC = () => {
  return (
    <LoadingScreenStyles>
      <CircularProgress size={100} />
    </LoadingScreenStyles>
  );
};

export default LoadingScreen;
