import React from "react";
import {Link, Route} from 'react-router-dom';
import Form from "./components/Form";
import Home from "./components/Home";

const App = (props) => {
  return (
    <div className = "homePage container">
      <header>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to = "/">Home</Link>
        <a href = "/">Help</a>
      </nav>
      </header>

      {/* Routes */}
      <Route path = "/">
      <Home/>
      </Route>
    </div>
  );
};
export default App;
