import FolderOffIcon from '@mui/icons-material/FolderOff';
import { Box, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const EmptyStyles = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.6rem',
  color: theme.palette.mode === 'light' ? grey[400] : grey[800]
}));

interface MyEmptyProps {
  icon?: React.ReactNode
  description?: string
}

const MyEmpty: React.FC<MyEmptyProps> = ({
  icon = (
    <FolderOffIcon
      fontSize="large"
      sx={{ width: 30 }}
    />
  ),
  description = 'No data'
}) => {
  return (
    <EmptyStyles>
      {icon}
      <Typography
        variant="body1"
        component="span"
      >
        {description}
      </Typography>
    </EmptyStyles>
  );
};

export default MyEmpty;
