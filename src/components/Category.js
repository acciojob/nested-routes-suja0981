import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const Category = () => {
  const { path, url } = useRouteMatch();

  const items = ["Grooming", "Shirt", "Trouser", "Jewellery"];

  return (
    <div className="category-container">
      <h2>Women Category</h2>
      <p>Select an item to view details:</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Link to={`${url}/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Nested Route */}
      <div className="nested-content">
        <Switch>
          <Route exact path={path}>
            <p>Please select an item from above.</p>
          </Route>
          <Route path={`${path}/:itemId`} component={ItemDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default Category;
