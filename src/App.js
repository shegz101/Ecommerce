import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import Home from './ProductPages/Home';
import Electronics from './Components/Electronics';
import Jewelry from './Components/Jewelry';
import Men from './Components/Men';
import Women from './Components/Women';
import Cart from './ProductPages/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <div className="route-page">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/electronics">
              <Electronics/>
            </Route>
            <Route path="/jewelry">
              <Jewelry/>
            </Route>
            <Route path="/men">
              <Men/>
            </Route>
            <Route path="/women">
              <Women/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </div> 
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
