import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';


function SkeletineComp() {
  return (
    <>
        <div id="row" style={{display:"flex", justifyContent:"space-evenly", marginTop:"200px"}}>
            <Box sx={{ width: 400 }}>
            <Skeleton animation="wave" variant='rounded' width={"100%"} height={"200px"}/>
            <Skeleton animation="wave" variant='rounded' sx={{marginTop:"10px"}}/>
            <Skeleton animation="wave" />
            </Box>

            <Box sx={{ width: 400 }}>
            <Skeleton animation="wave" variant='rounded' width={"100%"} height={"200px"}/>
            <Skeleton animation="wave" variant='rounded' sx={{marginTop:"10px"}}/>
            <Skeleton animation="wave" />
            </Box>

            <Box sx={{ width: 400 }}>
            <Skeleton animation="wave" variant='rounded' width={"100%"} height={"200px"}/>
            <Skeleton animation="wave" variant='rounded' sx={{marginTop:"10px"}}/>
            <Skeleton animation="wave" />
            </Box>
        </div>
    </>
  )
}

export default SkeletineComp;