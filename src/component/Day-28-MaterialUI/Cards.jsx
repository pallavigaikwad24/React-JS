import React from 'react';
import {Typography, Button, IconButton, Grid, Card, CardContent, CardActionArea, CardMedia, Box} from '@mui/material';
import Container from '@mui/material/Container';
import data from './data.json';

function Cards() {
  return (
    <>
        <Container maxWidth="lg">
            <Typography variant='h4' align='center' sx={{marginTop:"50px"}}>
                Responsive Cards using Material UI
            </Typography>
            <Grid container spacing={5} style={{ marginTop:"20px"}}>
                {data.map((result, index)=>(
                    <Grid item xs={12} sm={4} ms={4} key={index}>
                        <Card sx={{ maxWidth: 345 }} style={{padding:"10px", marginBottom:"30px"}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={result.img}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {result.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {result.des}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </Container> 
    </>
  )
}

export default Cards