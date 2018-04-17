import React from 'react';

import SearchBar from './searchbar'
import ProductTable from './producttable'


class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable