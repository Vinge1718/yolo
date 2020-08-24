import React from 'react'

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form className="new-product-form" onSubmit = {props.formSubmissionHandler}>
                <h1>Product Form</h1>
                <div className="form-input-material">
                    <input type = 'text'
                        name = 'name'
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
                        placeholder = ' '
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
                        placeholder = ' '
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
                        placeholder = ' '
                        className = 'form-control-material'
                        autoComplete="off"
                        id = 'quantity'
                        required
                    />
                    <label htmlFor="quantity"> Quantity</label>
                </div>
                <br/>
                {/* <div action="" className= "new-product-for">
                    <div className="form-input-material">
                        <input type = 'file' 
                            // onChange = {onFileChange}
                            name = 'photo'
                            className = 'form-control-material'
                            id = 'photo'
                        />
                        <label htmlFor="product-photo"> Product Photo</label>
                    </div>
                </div> */}
                <button type="submit" className="btn btn-primary btn-ghost">{props.buttonText} </button>    
            </form>
        </React.Fragment>
    )
}

export default ReusableForm
