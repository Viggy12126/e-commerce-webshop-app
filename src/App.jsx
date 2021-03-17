import './App.css';
import {commerce} from './lib/commerce';
import {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from './components/Products';
import NavBar from './components/Products/NavBar';
import Footer from './components/Footer';
import Basket from './components/Basket'; 
import Checkout from './components/Checkout';

const App= ()=> {
  const [products,setProducts]=useState([]);
  const [basketData,setBasketData]=useState({});
  const [orderInfo, setOrderInfo] = useState({});
  const [orderError, setOrderError] = useState("");

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchBasketData= async ()=>{
    const response= await commerce.cart.retrieve();
    setBasketData(response);

  }

 

  useEffect(() => {
    fetchProducts();
    fetchBasketData();
    
  }, []);

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setBasketData(response.cart);
  }

  const updateProduct = async (productId,quantity)=>{
    const response = await commerce.cart.update(productId,{quantity});
    setBasketData(response.cart);
  }

  const handleEmptyBasket = async ()=>{
    const response= await commerce.cart.empty();
    setBasketData(response.cart);
  }

  const RemoveItemFromBasket=async (ItemId)=>{
    const response=await commerce.cart.remove(ItemId);
    setBasketData(response.cart);
  }

  const refreshBasket = async () => {
    const newBasketData = await commerce.cart.refresh();
    setBasketData(newBasketData);
  };

  const handleCheckout = async (checkoutId, orderData) => {
    try {
      // const incomingOrder = await commerce.checkout.capture(
      //   checkoutId,
      //   orderData
      // );

      setOrderInfo(orderData);

      refreshBasket();
    } catch (error) {
      setOrderError(
        (error.data && error.data.error && error.data.error.message) ||
          "There is an error occurred"
      );
    }
  };


  
  
  return <Router>
   <div>
     <NavBar basketItems={basketData.total_items} totalCost={
       (basketData.subtotal && basketData.subtotal.formatted_with_symbol) || 
       "00.00"
     }/>
     <Switch>
       <Route exact path="/">
         <Products products={products} addProduct={addProduct}/>
       </Route>
       <Route exact path="/basket">
      <Basket 
      basketData={basketData}
      updateProduct={updateProduct}
      handleEmptyBasket={handleEmptyBasket}
      RemoveItemFromBasket={RemoveItemFromBasket}
      
      
      />
      


      
       </Route>
       <Route exact path="/checkout">
         <Checkout basketData={basketData}  handleCheckout={ handleCheckout} orderInfo={orderInfo} orderError={orderError}/>
       </Route>
     </Switch>
     <Footer />
   </div>

  </Router>    

  
}

export default App;
