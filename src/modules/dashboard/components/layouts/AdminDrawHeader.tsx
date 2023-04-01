import { styled } from '@mui/material';
import React from 'react';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

interface AdminDrawHeaderProps {
  children?: React.ReactNode
}

const AdminDrawHeader: React.FC<AdminDrawHeaderProps> = ({ children }) => {
  return <DrawerHeader>{children}</DrawerHeader>;
};

export default AdminDrawHeader;
