import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
    return (
      <div className="cardSection">
        <Card className="Card" sx={{ maxWidth: 500, margin: 2 }}>
          <CardActionArea className="CardActionArea">
            <CardMedia
              component="img"
              height="350"
              image={props.img}
              alt="Malta"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.destination}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {props.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
