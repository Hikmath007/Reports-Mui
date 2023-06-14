
import { AccountBox,  Description, Group, Home, ModeNight, Person, Settings, Store } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import Country from './Country'
import Add from './Add'
const Sidebar = () => {
  return (
    <Box 
    flex={2}
    p={2} sx={{display:{xs:"none",sm:"block"}}} margin={0}>
      <Box position="sticky">
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#Home">
              <ListItemIcon>
              <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#Pages">
              <ListItemIcon>
              <Description/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#group">
              <ListItemIcon>
              <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#MarketPlace">
              <ListItemIcon>
              <Store/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#friends">
              <ListItemIcon>
              <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#settings">
              <ListItemIcon>
              <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#profile">
              <ListItemIcon>
              <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#darkmode">
              <ListItemIcon>
               <ModeNight/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>
          </List>
          <Country/>
         <Add/> 
         
  </Box>
    </Box>


  )
}

export default Sidebar
