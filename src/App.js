import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Electronics from './Components/Electronics';
import Jewelry from './Components/Jewelry';
import Men from './Components/Men';
import Women from './Components/Women';

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
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
