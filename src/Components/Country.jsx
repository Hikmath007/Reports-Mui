import { TextField } from '@mui/material'
import React ,{useState}from 'react'

const Country = () => {
  const[value, setValue]=useState('')

  return (
    <TextField classes={{ root: 'myTextField' }}
      label='Text here' value={value} required onChange={(e)=>setValue(e.target.value)}
      variant="outlined" 
      error={!value}
      sx={{
        '& .MuiFormHelperText-root': {
          color: value ? 'green' : 'red',
        },
      }}
      helperText={!value ? 'Required' : 'Do not share your password with anyone'}
       color= {value?'success':"error" }
      
    />
  )
}

export default Country
