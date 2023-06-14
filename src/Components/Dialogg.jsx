import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import { Autocomplete, TextField } from '@mui/material';



const countries = [
    { value: false, label: 'Earth' },
    { value: 'sx', label: 'India' },
    { value: 'sm', label: 'Nepal' },
    { value: 'md', label: 'USA' },
    { value: 'lg', label: 'Australia' },
    { value: 'xl', label: 'Canada' },
  ];
  const sortedCountries = countries.slice().sort((a, b) => a.label.localeCompare(b.label));

  const Dialogg = () => {
    const [open, setOpen] = useState(false);
    const [countryname, setCountryname] = useState('');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handlecountryChange = (event, value) => {
      if (value) {
        setCountryname(value.value);
      }
    };
  
    return (
      <>
        <TextField
          label="CountryName"
          variant="outlined"
          onClick={handleClickOpen}
          value={countryname}
          onChange={(event) => setCountryname(event.target.value)}
        >
          Country List
        </TextField>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Countries</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can change any countries in the below list
            </DialogContentText>
            <Autocomplete
              autoFocus
              options={countries}
              getOptionLabel={(option) => option.label}
              value={sortedCountries.find((option) => option.value === countryname) || null}
              onChange={handlecountryChange}
              renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close Country</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default Dialogg;