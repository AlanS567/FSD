import { Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const Cardapi = () => {
  return (
    <div>
      <Typography variant="h3">Cards</Typography>  
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
            <Card sx={{maxWidth:345}}>
                <CardMedia
                sx={{height:140}}
                image="https://qph.cf2.quoracdn.net/main-qimg-f3091390b5e21a35458af547000c3810-lq"
                title="Vijay">

                </CardMedia>
                
            </Card>

        </Grid>

      </Grid>
    </div>
  )
}

export default Cardapi
