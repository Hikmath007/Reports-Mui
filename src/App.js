import Sidebar from "./Components/Sidebar";
import Feedbar from "./Components/Feedbar";
import Rightbar from "./Components/Rightbar";
import Box from '@mui/material/Box'
import { Stack } from "@mui/material";
import Navbar from "./Components/Navbar";
import CustomToolbar from "./Components/Datgrid";

function App() {
  
  return (
    <Box>
      
      
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
      <Sidebar />
      <Feedbar/>
      <Rightbar/></Stack>
     <CustomToolbar/>
    </Box>
  );
}

export default App;
