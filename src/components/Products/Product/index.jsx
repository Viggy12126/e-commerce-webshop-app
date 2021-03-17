import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ShoppingCart} from '@material-ui/icons';
import './styles.css';


  
    const Product =({product,addProduct })=>(
      <Card className="custom-card">
        <CardActionArea>
          <CardMedia
          component="img"
          height="260"
            className="card-image"
            image={product.media.source}
            title="Contemplative Reptile"
          />
          <CardContent className="content">
            <Typography className="title" gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions className="actions-content">
          <>
         <Typography className="price" gutterBottom variant="h5" component="h2">
         {product.price.formatted_with_symbol}
         </Typography>
         <Button
             size="large"
             className="custom-button"
             onClick={()=>{
                 addProduct(product.id,1);
             }}
             >
             <ShoppingCart />Add to basket
         </Button>
          </>
        </CardActions>
      </Card>
    );
  
  
  export default Product;