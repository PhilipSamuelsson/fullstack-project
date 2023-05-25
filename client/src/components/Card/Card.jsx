import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    return (
      <div className="cardSection">
        <Card className="Card" sx={{ maxWidth: 500, margin: 2 }}>
          <CardActionArea className="CardActionArea">
            <CardMedia
              component="img"
              height="350"
              image="https://images.unsplash.com/photo-1587974928552-4f4aac51b45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80"
              alt="Malta"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Destination
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price 123123
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
