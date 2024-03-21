import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Themes } from "../../../themes/themes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const workspaces = [
  "Tech Entereza",
  "Entereza",
  "Entereza Tech",
  "Inti Rojas Espacio de trabajo de...",
];
const recent = ["Recent"];

export const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElWorkspaces, setAnchorElWorkspaces] = React.useState<null | HTMLElement>(null);
  const [anchorElRecent, setAnchorElRecent] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenWorkspacesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElWorkspaces(event.currentTarget);
  };
  const handleOpenRecentMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRecent(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseWorkspacesMenu = () => {
    setAnchorElWorkspaces(null);
  };

  const handleCloseRecentMenu = () => {
    setAnchorElRecent(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: Themes.palette.primary,
        borderRadius: Themes.styles.borderRadius,
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <DashboardIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: Themes.palette.primary,
              backgroundImage: `linear-gradient(to bottom right, ${Themes.palette.electricBlue}, ${Themes.palette.electricGreen})`,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <span style={{ color: Themes.palette.electricGreen }}>Re</span>
            <span style={{ color: Themes.palette.electricBlue }}>Board</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: Themes.palette.secondary }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleOpenWorkspacesMenu}>
                <Typography textAlign="center" sx={{ color: Themes.palette.dark }}>
                  WorkSpaces
                </Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElWorkspaces}
                open={Boolean(anchorElWorkspaces)}
                onClose={handleCloseWorkspacesMenu}
              >
                {workspaces.map((workspace) => (
                  <MenuItem key={workspace} onClick={handleCloseWorkspacesMenu}>
                    <Typography variant="body1" textAlign="center">
                      {workspace}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              <MenuItem onClick={handleOpenRecentMenu}>
                <Typography textAlign="center" sx={{ color: Themes.palette.dark }}>
                  Recent
                </Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElRecent}
                open={Boolean(anchorElRecent)}
                onClose={handleCloseRecentMenu}
              >
                {recent.map((item) => (
                  <MenuItem key={item} onClick={handleCloseRecentMenu}>
                    <Typography variant="body1" textAlign="center">
                      {item}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleOpenWorkspacesMenu}
              sx={{
                my: 2,
                color: Themes.palette.secondary,
                display: "flex",
                alignItems: "center",
              }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Workspaces
            </Button>
            <Menu
              anchorEl={anchorElWorkspaces}
              open={Boolean(anchorElWorkspaces)}
              onClose={handleCloseWorkspacesMenu}
            >
              {workspaces.map((workspace) => (
                <MenuItem key={workspace} onClick={handleCloseWorkspacesMenu}>
                  <Typography variant="body1" textAlign="center">
                    {workspace}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

            <Button
              onClick={handleOpenRecentMenu}
              sx={{
                my: 2,
                color: Themes.palette.secondary,
                display: "flex",
                alignItems: "center",
              }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Recent
            </Button>
            <Menu
              anchorEl={anchorElRecent}
              open={Boolean(anchorElRecent)}
              onClose={handleCloseRecentMenu}
            >
              {recent.map((item) => (
                <MenuItem key={item} onClick={handleCloseRecentMenu}>
                  <Typography variant="body1" textAlign="center">
                    {item}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <DashboardIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: Themes.palette.primary,
              backgroundImage: `linear-gradient(to bottom right, ${Themes.palette.electricBlue}, ${Themes.palette.electricGreen})`,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <span style={{ color: Themes.palette.electricGreen }}>Re</span>
            <span style={{ color: Themes.palette.electricBlue }}>Board</span>
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "45px",
                "& .MuiList-root": {
                  padding: 0,
                  border: `1px solid ${Themes.palette.secondary}`,
                  borderRadius: Themes.styles.borderRadius,
                },
                "& .MuiMenuItem-root": {
                  padding: "10px 20px",
                  transition: "background-color 0.3s, color 0.3s",
                  "&:hover": {
                    background: Themes.palette.secondary,
                    color: Themes.palette.primary,
                  },
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography variant="body1" textAlign="center">
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
};