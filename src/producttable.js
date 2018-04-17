import React, { Component } from "react";

import ProductCategoryRow from "./productcategoryrow";
import ProductRow from "./productrow";
import "font-awesome/css/font-awesome.min.css";
import Icon from "./icon";

class ProductTable extends Component {
  render() {
    const prodCat = this.props.products.reduce(
      (total, item) => [...total, item.category],
      []
    );
    const categorySet = new Set(prodCat);
    const finalArr = [...categorySet];
    const groupedArr = finalArr.map((item, index) => {
      return {
        category: item,
        products: this.props.products.filter(prod => prod.category === item)
      };
    });

    // console.table(groupedArr);

    const output = groupedArr.map((item, index) => {
      return (
        <div>
          <ProductCategoryRow category={item.category} key={item.category} />
          {item.products.map((product, index) => {
            return <ProductRow product={product} key={product.name} />;
          })}
        </div>
      );
    });

    return (
      <div>
        <Icon icon="trash" />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{output}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
