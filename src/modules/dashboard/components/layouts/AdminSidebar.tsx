import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  CSSObject,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
  useTheme
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import React from 'react';
import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps
} from 'react-router-dom';
import { v4 } from 'uuid';

import { BTN_BORDER_RADIUS, DRAWER_WIDTH } from '.';
import AdminDrawHeader from './AdminDrawHeader';

const NavLink = React.forwardRef<HTMLAnchorElement, RouterNavLinkProps>(
  function NavLink (itemProps, ref): JSX.Element {
    const theme = useTheme();

    return (
      <RouterNavLink
        style={({ isActive }) => {
          if (isActive) {
            return {
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.contrastText
                  : theme.palette.primary.main,
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.customColors.colorPrimary,
              borderRadius: BTN_BORDER_RADIUS,
              fontWeight: 'bold'
            };
          }
          return { color: 'inherit' };
        }}
        ref={ref}
        {...itemProps}
        role={undefined}
        end
      />
    );
  }
);

const navLinkDataTop = [
  {
    key: v4(),
    title: 'Dashboard',
    url: '/admin',
    icon: <HomeIcon />
  },
  {
    key: v4(),
    title: 'Manage Ingredients',
    url: 'manage-ingredients',
    icon: <MenuBookIcon />
  }
];

const navLinkDataBottom = [
  {
    key: v4(),
    title: 'Settings',
    url: 'settings',
    icon: <SettingsIcon />
  },
  {
    key: v4(),
    title: 'Logout',
    url: '/',
    icon: <LogoutIcon />
  }
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 0.8rem)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 0.8rem)`
  }
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...((open ?? false) && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!(open ?? false) && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

interface AdminSidebarProps {
  open: boolean
  handleDrawerClose: () => void
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ open, handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      open={open}
    >
      <AdminDrawHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl'
            ? (<ChevronRightIcon />)
            : (<ChevronLeftIcon />)
          }
        </IconButton>
      </AdminDrawHeader>
      <Divider />
      <List sx={{ padding: '0.8rem' }}>
        {navLinkDataTop.map((item) => (
          <ListItem
            key={item.key}
            disablePadding
            component={NavLink}
            to={item.url}
            sx={{ display: 'block' }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius: BTN_BORDER_RADIUS
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: 'inherit'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ opacity: open ? 1 : 0 }}
                disableTypography
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ padding: '0.8rem' }}>
        {navLinkDataBottom.map((item) => (
          <ListItem
            key={item.key}
            disablePadding
            component={NavLink}
            to={item.url}
            sx={{ display: 'block' }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius: BTN_BORDER_RADIUS
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: 'inherit'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ opacity: open ? 1 : 0 }}
                disableTypography
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
