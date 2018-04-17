import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import FilterableProductTable from "./filterableproducttable";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "N49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "N9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "N29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "N99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "N399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

const App = () => (
  <div style={styles}>
    <FilterableProductTable products={PRODUCTS} />
  </div>
);

render(<App />, document.getElementById("root"));
