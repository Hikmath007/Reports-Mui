import {  AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Dialogg from './Dialogg';
const Rightbar = () => {
  return (
    <Box flex={2}
    p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <Box>
    <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
    <AvatarGroup total={8}>
  <Avatar alt="SKY" src="https://images.livemint.com/img/2023/01/10/1600x900/PTI01-07-2023-000182A-0_1673357287834_1673357287834_1673357306901_1673357306901.jpg" />
  <Avatar alt="Ishan Kishan" src="https://www.timesofsports.com/wp-content/uploads/2021/10/Ishan-Kishan-1.png" />
  <Avatar alt="Cameron Green" src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/550.png" />
  <Avatar alt="Jasprit Bumraah" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/jasprit_bumrah_pti-one_one.jpg?VersionId=ScefOfdGwin2u8f8oA5nx8KkRC_.xbQS" />
</AvatarGroup>

<Typography variant='h6' fontWeight={100}>Recent Pictures</Typography>
<ImageList sx={{ width:300, height: 150 }} cols={3} rowHeight={100} >
  <ImageListItem>
      <img 
      src="https://www.mumbaiindians.com/static-assets/waf-images/d1/85/18/16-9/1920-1080/icOTMY7y37.jpeg"
      alt=''/>
      </ImageListItem>
  <ImageListItem>
      <img 
      src="https://www.mumbaiindians.com/static-assets/waf-images/20/97/1c/4-3/592-444/80muNSf3MR.jpg"
      alt=''/>
      </ImageListItem>
  <ImageListItem>
      <img 
      src="https://img.mensxp.com/media/content/2022/Feb/header-credit-Twitter---MI_6219c22298733.jpeg?w=820&h=540&cc=1"
      alt=''/>
      </ImageListItem>
      
</ImageList>
<Typography variant='h6' fontWeight={100}>Latest News</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',marginY:0}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Rohit Sharma" src="https://www.cricwindow.com/images/ipl/2023/ipl-2023-points-table.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Qualified to Playoffs?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Hikmath Soti
              </Typography>
              {" Wow!!!Mumbai Indians has been qualified…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Which team has a best team to win?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Nihal Khan
              </Typography>
              {" Mumbai has a strong team to win the IPL Cup 2023"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://karnatakastateopenuniversity.in/wp-content/uploads/2022/02/Mumbai-Indians-IPL.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Who will win Cup?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Hari
              </Typography>
              {' EA Saala Cup Hamara'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
 <Dialogg/>
     </Box>
    </Box>
  )
}

export default Rightbar
