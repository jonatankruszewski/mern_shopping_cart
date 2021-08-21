import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx";
import ProductScreen from "./Screens/ProductScreen/ProductScreen.jsx";
import CartScreen from "./Screens/CartScreen/CartScreen.jsx";
import Navbar from "./Components/Navbar/Navbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import BackDrop from "./Components/BackDrop/BackDrop";
import { useState } from "react";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <main>
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer click={() => setSideToggle(true)} show={sideToggle} />
        <BackDrop
          show={sideToggle}
          click={() => {
            setSideToggle(false);
          }}
        />
        <Switch>
          <Route exact path='/' component={HomeScreen}></Route>
          <Route exact path='/product/:id' component={ProductScreen}></Route>
          <Route exact path='/cart' component={CartScreen}></Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
