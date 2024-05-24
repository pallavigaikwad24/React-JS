import React, { Suspense, lazy } from 'react';
import {Typography, Button, IconButton, Grid, Card, CardContent, CardActionArea, CardMedia, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';
import data from './data.json';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import SkeletineComp from './SkeletineComp';
// import Cards from './Cards';

const Cards = lazy(() => import("./Cards"));

function MUI() {
    const arr = [1,2,3,4,5,6];
  return (
    <>
        {/* <Typography variant='h3'>
            Material UI Example: 
        </Typography>
        <Button variant='contained' color='success'>Contained Button</Button>
        <Button variant='text' color='error' size='medium'>Text Button</Button>
        <Button variant='outlined' color='secondary' onClick={()=> alert("You have clicked")}>Outlined Button</Button>

        <Button variant="outlined" startIcon={<DeleteIcon />}> Delete</Button>
        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
        <IconButton>
            <DeleteIcon/>
            <SendIcon/>
        
        </IconButton> */}

       

      {/* <Skeleton
        sx={{ bgcolor: 'pink' }}
        variant="rectangular"
        width={210}
        height={118}
      /> */}
    
    <Suspense fallback={<SkeletineComp/>}>
      <Cards/>
    </Suspense>

    </>
  )
}

export default MUI;