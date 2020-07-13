import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

import About from "./pages/about"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Header from "./components/header"

function App() {
  return (

<div>
    <Header />
<Home />
    {/* <Router>
    <div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
        <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router> */}
  </div>
  );
}

export default App;
