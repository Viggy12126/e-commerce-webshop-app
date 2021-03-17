import { Container, Typography, Button, Grid,CardActionArea,CardActions,CardMedia,CardContent,Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles.css";
import Banner from './Banner';
import Spinner from '../Spinner';
import {useState} from 'react';


const Basket = ({
    basketData,
    updateProduct,
    handleEmptyBasket,
    RemoveItemFromBasket,
  }) => {
      const [showSpinner,setShowSpinner]=useState(true);

      const loading=()=>{
         setTimeout(()=>{
             setShowSpinner(false);
         },2000);
         if(showSpinner){
             return <Spinner />
         }
         return <Banner />

      }


    if (!basketData.line_items || !basketData.line_items.length)
    return loading();
    return(
        <Container id="basket">
            <Grid container justify="center" spacing={4}>
            {basketData.line_items.map((product)=>{
          return(
              <Grid key={product.id} xs={12} sm={6} md={4}>
                  <Card className="custom-card">
                      <CardActionArea>
                          <CardMedia
                              component="img"
                              alt="Contemplative Reptile"
                              height="260"
                              className="card-image"
                              image={product.media.source}
                              title="Contemplative Reptile"


                              />
                              <CardContent className="content">
                             <Typography
                             className="title"
                             variant="h5"
                             gutterBottom
                             component="h2"

                             >
                                 {product.name}
                             </Typography>
                              </CardContent>
                         
                      </CardActionArea>

                      <CardActions>
                          <Typography
                          className="basket-item-price"
                          variant="h5"
                          gutterBottom
                          component="h2"
                          >
                              {product.price.formatted_with_symbol}

                          </Typography>
                      </CardActions>

                      <CardActions className="actions-content">
                          <Button
                          size="small"
                          color="secondary"
                          variant="outlined"
                          
                          onClick={()=>{
                              RemoveItemFromBasket(product.id);
                          }}
                          >
                            Remove
                          </Button>
                          <>
                          <Button
                          size="small"
                          variant="outlined"
                          className="increase-product-quantity"
                          onClick={()=>{
                              updateProduct(product.id,product.quantity+1);
                          }}
                        


                          >
                           +
                          </Button>
                          <Typography >&nbsp;{product.quantity}&nbsp;</Typography>
                          <Button
                          size="small"
                          color="secondary"
                          variant="outlined"
                          onClick={()=>{
                            updateProduct(product.id,product.quantity-1);
                          }}
                          >
                         -
                          </Button>
                          </>

                      </CardActions>

                  </Card>


              </Grid>
          )
            })}
            </Grid>
            <div className="actions">
                <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={handleEmptyBasket}
                
                >
               Empty Basket
                </Button>

                <Button 
                size="small"
                variant="contained"
                component={Link}
                to="/checkout"
                
                >
                Checkout
                </Button>

            </div>

        </Container>
    )

  }
  export default Basket;