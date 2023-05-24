import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1587974928552-4f4aac51b45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80"
          alt="Malta"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Destination
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price 123123123123123333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
