import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./index.scss";
import SingleItem from "./components/SingleItem/SingleItem";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={SingleItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//0:48:06​ Continue Building Application
