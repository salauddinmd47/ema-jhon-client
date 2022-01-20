import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inventory from './Components/Inventory/Inventory';
import OrderReview from './Components/OrderReview/OrderReview';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
           <Shop></Shop>
        </Route>
        <Route exact path="/inventory">
           <Inventory></Inventory>
        </Route>
        <Route exact path="/review">
           <OrderReview></OrderReview>
        </Route>
        <Route exact path="*">
           <NotFound></NotFound>
        </Route>
      </Switch>
      
      </BrowserRouter>
       
      
    </div>
  );
}

export default App;
