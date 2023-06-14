import { Delete, Add as AddIcon } from '@mui/icons-material'
import { Fab, IconButton, Tooltip } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <>
    <Tooltip  title="Delete">
  <IconButton>
    <Delete sx={{mr:2 }}/>
  </IconButton>
</Tooltip>
<Fab color="secondary" size="small" aria-label="add">
  <AddIcon/>
</Fab>
    </>




  )
}

export default Add
