import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Themes } from '../../../themes/themes';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{background: Themes.palette.primary, borderRadius: Themes.styles.borderRadius}}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <DashboardIcon
            sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                color: Themes.palette.primary,
                backgroundImage: `linear-gradient(to bottom right, ${Themes.palette.electricBlue}, ${Themes.palette.electricGreen})`
              }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <span style={{ color: Themes.palette.electricGreen }}>Re</span>
            <span style={{ color: Themes.palette.electricBlue }}>Board</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: Themes.palette.secondary}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{color: Themes.palette.dark}}>WorkSpaces</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <DashboardIcon 
            sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1,
                color: Themes.palette.primary,
                backgroundImage: `linear-gradient(to bottom right, ${Themes.palette.electricBlue}, ${Themes.palette.electricGreen})`
              }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <span style={{ color: Themes.palette.electricGreen }}>Re</span>
            <span style={{ color: Themes.palette.electricBlue }}>Board</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: Themes.palette.secondary, display: 'block' }}
              >
                WorkSpaces
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: '45px',
                '& .MuiList-root.MuiList-padding.MuiMenu-list.css-6hp17o-MuiList-root-MuiMenu-list': {
                  padding: 0,
                  border: `1px solid ${Themes.palette.secondary}`,
                  borderRadius: 0,
                },
                '& .MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-root.MuiMenuItem-gutters.css-3teqv8-MuiButtonBase-root-MuiMenuItem-root': {
                  '&:hover': {
                    background: Themes.palette.secondary,
                  }
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem 
                  key={setting} 
                  onClick={handleCloseUserMenu} 
                  sx={{
                    background: Themes.palette.primary,
                  }}
                >
                  <Typography 
                    textAlign="center" 
                    sx={{
                      color: Themes.palette.secondary,
                      "&:hover": {
                        color: Themes.palette.primary,
                      },
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}