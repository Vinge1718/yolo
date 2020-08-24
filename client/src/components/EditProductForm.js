import React from 'react';
import PropTypes from "prop-types";

function EditProductForm(props) {
    // const { product } = props
    function handleEditFormSubmission(event){
        event.preventDefault()
        props.onEditProduct({
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value,
            quantity: event.target.quantity.value,
        })
    }

    return (
        <React.Fragment>
            <div className="product-form">
                {/* <ReusableForm 
                buttonText = 'Update Product'/> */}
                
                <form className="new-product-form" onSubmit = {handleEditFormSubmission}>
                    <h1>Product Form</h1>
                    <div className="form-input-material">
                        <input type = 'text'
                            name = 'name'
                            defaultValue = {props.product.name}
                            placeholder = ' '
                            className = 'form-control-material'
                            autoComplete="off"
                            id = 'name'
                            required
                        />
                        <label htmlFor="name"> Name</label>
                    </div>
                    <div className="form-input-material">
                        <input type = 'text'
                            name = 'price'
                            defaultValue = {props.product.price}
                            className = 'form-control-material'
                            autoComplete="off"
                            id = 'price'
                            required
                        />
                        <label htmlFor="price"> Price</label>
                    </div>
                    <div className="form-input-material">
                        <textarea type = 'text'
                            name = 'description'
                            defaultValue = {props.product.description}
                            className = 'form-control-material'
                            autoComplete="off"
                            id = 'description'
                            required
                        />
                        <label htmlFor="description"> Description </label>
                    </div>
                    <div className="form-input-material">
                        <input type = 'number'
                            name = 'quantity'
                            defaultValue = {props.product.quantity}
                            className = 'form-control-material'
                            autoComplete="off"
                            id = 'quantity'
                            required
                        />
                        <label htmlFor="quantity"> Quantity</label>
                    </div>
                    <br/>
                    
                    <button type="submit" className="btn btn-primary btn-ghost">Update Product</button>    
                </form>
            </div>
        </React.Fragment>
    )
}

EditProductForm.propTypes = {
    onEditTicket: PropTypes.func
};

export default EditProductForm
