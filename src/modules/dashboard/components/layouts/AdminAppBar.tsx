import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  IconButton,
  Stack,
  styled,
  Toolbar,
  Typography
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import moment from 'moment';
import React from 'react';

import { DRAWER_WIDTH } from '.';
import MyInput from '../../../../shared/components/input';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: +theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open === true && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

interface AdminAppBarProps {
  open: boolean
  handleDrawerOpen: () => void
}

const AdminAppBar: React.FC<AdminAppBarProps> = ({
  open,
  handleDrawerOpen
}) => {
  return (
    <AppBar
      position="fixed"
      open={open}
    >
      <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginLeft: 2,
            marginRight: 5,
            ...(open && { display: 'none' })
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginRight: 2,
            justifyContent: 'space-between',
            ...(open && { marginLeft: 2 })
          }}
        >
          <Stack>
            <Typography
              variant="h5"
              component="h1"
              fontWeight="bold"
            >
              Hoang Loc
            </Typography>
            <Typography
              variant="body2"
              fontSize="0.8rem"
            >
              {moment().format('dddd, D MMM YYYY')}
            </Typography>
          </Stack>
          <MyInput
            id="search-dish"
            style={{ minWidth: '20rem' }}
            placeholder="Search for food, coffee, etc..."
            icon={<SearchIcon />}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminAppBar;
