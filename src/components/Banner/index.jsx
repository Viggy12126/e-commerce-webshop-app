import { Container, Typography, Button, Grid } from "@material-ui/core";
import "./styles.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h1">
              Welcome to E-Commerce-Web-Shop 
            </Typography>
            <Button className="shopping-button" href="#products">
              Shopping
            </Button>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;