import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
  } from "@material-ui/core";
  import { ShoppingCart } from "@material-ui/icons";
  import { Link, useLocation } from "react-router-dom";
  
  import "./styles.css";
  
  const NavBar = ({ basketItems, totalCost }) => {
    const location = useLocation();
  
    return (
      <>
        <AppBar position="fixed" className="custom-navbar">
          <Container>
            <Toolbar>
              <Typography
                component={Link}
                to="/"
                variant="h6"
                className="custom-title"
                color="inherit"
              >
               
              </Typography>
              {location.pathname === "/basket" ? (
                <div className="basket-wrapper">
                  <h2>
                    Total cost: <strong>{totalCost}</strong>
                  </h2>
                </div>
              ) : (
                <div className="basket-wrapper">
                  <IconButton
                    component={Link}
                    to="/basket"
                    aria-label="Show basket contents"
                    color="inherit"
                  >
                    <Badge badgeContent={basketItems} color="secondary">
                      <ShoppingCart className="custom-basket" />
                    </Badge>
                  </IconButton>
                </div>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </>
    );
  };
  
  export default NavBar;