import { Mail, Notifications, WhatsApp } from "@mui/icons-material";
import {AppBar,Avatar,Badge,Box,InputBase,Menu,MenuItem,Toolbar,Typography,styled,} from "@mui/material";
import React, { useState } from "react";

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display:"none", gap:"20",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
      display:"flex",}
     }));
   const UserBox =styled(Box)(({ theme }) => ({
      display:"flex", gap:"10",alignItems:"center",
      [theme.breakpoints.up("sm")]:{
        display:"none"
      }
  }));
  const Navbar = () => {
   const [open,setOpen] =useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          HIKMATH APP
        </Typography>
        <WhatsApp sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={3} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="success">
          <Notifications/> 
          </Badge>
    
          <Avatar onClick={(e)=>setOpen(true)}sx={{width:30,height:20}} alt="Hikmath Soti" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILbONtMJGU3BAcHkJKV679o2QmErj9pW1I4vp6sKvcg&usqp=CAU&ec=48665698" />

        </Icons>
      <UserBox onClick={(e)=>setOpen(true)}>
      <Avatar sx={{width:30,height:20}} alt="Hikmath Soti" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILbONtMJGU3BAcHkJKV679o2QmErj9pW1I4vp6sKvcg&usqp=CAU&ec=48665698" />
      <Typography variant="span">Hitman</Typography>
      </UserBox>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
      
        open={open}
        onClose={(e)=>setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
