import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

function ProductList(props) {
  // CHANGE: Add a check to ensure productList is an array; fallback to empty array if not
  const productList = Array.isArray(props.productList) ? props.productList : [];

  return (
    <React.Fragment>
      <div className='container' id="products">
        <div className="row pdg-line">
          <div className="col-4 col-sm-4 col-md-4">
            <div className="abt-top-border"> </div>
          </div>
          <div className="col-4 col-sm-4 col-md-4">
            <p className="product-title text-center">PRODUCTS </p>
          </div>
          <div className="col-4 col-sm-4 col-md-4">
            <div className="abt-top-border"> </div>
          </div>
        </div>
        <div className="men-products">
          <div className="row">
            {productList.length === 0 ? (  // CHANGE: Render fallback message if empty or invalid
              <div className="col-12 text-center">
                <p>No products available yet. Add one to get started!</p>
              </div>
            ) : (
              productList.map((product) => (
                <Product 
                  whenProductClicked={props.onProductSelection} 
                  photo={product.photo}
                  name={product.name}
                  price={product.price}
                  id={product._id}
                  key={product._id}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// Add propTypes for product list (unchanged, but good practice)
ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func,
};

export default ProductList;