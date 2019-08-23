import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <div className="links">
          <Link to="/">Login</Link>
          <Link to="/bubblepage">Bubble Page</Link>
          <Link to="/" onClick={() => localStorage.clear()}>
            Logout
          </Link>
        </div>

        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubblepage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
