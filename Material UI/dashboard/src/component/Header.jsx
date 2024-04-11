import React from 'react'
import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


const Header = () => {
  return (
    <>
  <Toolbar>
    <IconButton>
        <MenuIcon/>
    </IconButton>
    <Typography variant="h6">Welcome to the blogging channel</Typography>
     <IconButton >
       
     </IconButton>
  <IconButton>
        <NotificationsIcon/>
    </IconButton>
    </Toolbar>
  <Divider/>
  <Toolbar>Express your emotions through actions</Toolbar>
  </>
  )
}

export default Header
