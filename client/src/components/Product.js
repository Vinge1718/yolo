import React from 'react';
import PropTypes from 'prop-types';

import Default_image from '../images/product_image.jpeg'


function Product (props) {

    
    return (
        <React.Fragment>
            <div className="col-12 col-sm-12 col-md-4" >
                <div className="product" onClick = { () => props.whenProductClicked(props.id)} >
                    <div className="product-img">
                        <img 
                        src= {Default_image} 
                        className="img-fluid d-block mx-auto" 
                        alt = {props.photo}/>
                    </div>
                    <div className="product-name-cost">
                        <h5 className="float-left gold">{props.name} </h5>
                        <h6 className="float-right font-weight-bold"> Ksh  {props.price}</h6>
                    </div>
                    <div >
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    photo: PropTypes.string,
    id: PropTypes.string,
    whenProductClicked: PropTypes.func,
}

export default Product;
