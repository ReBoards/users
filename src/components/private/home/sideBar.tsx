import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const SideBar: React.FC = () => {
  return (
    <Drawer variant="permanent" sx={{ width: '20%' }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <WorkspacesIcon />
          </ListItemIcon>
          <ListItemText primary="Workspaces" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Boards" />
        </ListItem>
      </List>
    </Drawer>
  );
};