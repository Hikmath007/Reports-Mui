import {  Box } from '@mui/material'
import React from 'react'
import Post from './Post'


const Feedbar = () => {
  return (
    <Box  flex={3}>
    <Post/>
    <Post/>
    <Post/>
    </Box>
  )
}

export default Feedbar
