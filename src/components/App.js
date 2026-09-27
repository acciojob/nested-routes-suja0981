import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Category from "./Category";
import "./../styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* Do not remove the main div */}
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/women" component={Category} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
