import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "./Card.css"


export default function ActionAreaCard({product}) {
  const {name, price, image} = product

  console.log(image);

  return (
    <Card className='prod'>
      <CardActionArea>
      <CardMedia
          component="img"
          height="140"
          image={require(`${image}`)}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}