import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid ,GridToolbar} from '@mui/x-data-grid';
import { Button, Pagination } from '@mui/material';

function CustomToolbar() {
  const [data, setData] = useState([]);
  

  const getBobDetail = async () => {
    try {
      const response = await axios.get('https://reports-api-uat.effigo.in/reports/po/pobycategory/topten?tenant=NCLTDINT-01&login_user_id=USR-a4e33c-18-06-2022-05');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getBobDetail();
  }, []);
  

  const handleButtonclick=(row)=>{
    console.log(`Button clicked for row:`,row)
  }

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 300  },
  //   { field: 'category', headerName: 'Category', width: 200 },
  //   { field: 'po', headerName: 'Cat_PO', width: 300 },
  //   { field: 'NonPO', headerName: 'Non_Cat_PO', width: 300 },
  //   { field: 'TotalPO', headerName: 'Total PO', width: 300 },
  //   {field:'button', headerName:"Action" , renderCell: (event)=> <Button onClick={()=>handleButtonclick(event.row)} variant="contained">Button</Button> },
  // ];

  // const rows = data.map(value => ({
  //   id:  value.category_id ,
  //   category: value.category,
  //   po: value.total_po_count,
  //   NonPO:value.non_cat_po_count,
  //  TotalPO:value.total_po_value,
   
  // }));
  
  const columns = data.length > 0 ? Object.keys(data[0]).map((key) => ({ field: key, headerName: key, width: 200 })) : [];

  const rows = data.map((value, index) => ({ id: index, ...value }));


  const [currentPage, setCurrentPage] = useState(1);
  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / 10);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
    // Perform data fetching or update based on the new page
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage + 1, 1));
  };

  return (
    <>
     <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      
        slots={{
          toolbar: GridToolbar,}}
      />
      </div>
    <div>
      
      <h1>Page {currentPage}</h1>
      <Button  onClick={handlePreviousPage}>
            Previous Page
          </Button>
      <Pagination
        count={10} 
        page={currentPage} 
        onChange={handleChangePage} 
      />
      <Button  onClick={handleNextPage}>
            Next Page
          </Button>
    </div>
    </>
  );
}

export default CustomToolbar;