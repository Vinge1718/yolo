import React from 'react'
import '../product-detail.css';
import Default_image from '../images/product_image.jpeg'

function ProductDetail (props) {

    const { product } = props
   
    return (
        <React.Fragment>

            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                
                                <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={Default_image} alt="" /></div>
                                </div>
                                
                            </div>
                            <div className="details col-md-6">
                                <div className = "row">
                                    <div className="col-md-6">
                                        <h3 className="product-title">{product.name} </h3>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="add-to-cart btn btn-default float-right" onClick ={props.onEditProductClick} > Edit Product</button>
                                    </div>
                                </div>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>
                                <p className="product-description"> {product.description} </p>
                                <h4 className="price">current price: <span> Ksh {product.price}</span></h4>
                                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                <h5 className="sizes">sizes:
                                    <span className="size" data-toggle="tooltip" title="small">s</span>
                                    <span className="size" data-toggle="tooltip" title="medium">m</span>
                                    <span className="size" data-toggle="tooltip" title="large">l</span>
                                    <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                </h5>
                                <h5 className="sizes">Quantity:
                                    <span className="size" data-toggle="tooltip" title="small">{product.quantity} </span>
                                </h5>
                                <h5 className="colors">colors:
                                    <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                    <span className="color green"></span>
                                    <span className="color blue"></span>
                                </h5>
                                <div className="action">
                                    <button className="add-to-cart btn btn-default" onClick={()=>{props.onBuyButtonClick(product._id)}} type="button">Buy Product</button>
                                    {/* <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button> */}
                                    <button className="add-to-cart btn btn-default float-right" onClick={()=> props.onDeleteProduct(product._id)}> Delete Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    
}

export default ProductDetail;
