import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar,  CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {
  return (
    <div>
     <card sx={{ maxWidth: 345 ,margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILbONtMJGU3BAcHkJKV679o2QmErj9pW1I4vp6sKvcg&usqp=CAU&ec=48665698'
            alt='' >
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Rohit Sharma-Hitman"
        subheader="Best Captain of IPL"
      />
      <CardMedia
        component="img"
        height="500"
        image="https://www.insidesport.in/wp-content/uploads/2021/03/1-2020-08-10T120632.388-1.jpg"
        alt="Rohit"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Rohit Sharma Aka Hitman is the best cricket Player in the world.
          Its beutiful to watch him hitting Sixes!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}  />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </card>
    </div>
  )
}

export default Post
