import React from 'react';


function AddProduct(props) {
    return (
        <div className="section-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-12 col-md-6"></div>
                    <div className="col-sm-12 col-12 col-md-6">
                        <div className="float-md-right">
                            {/* {addProductButton} */}
                            <button onClick={props.whenButtonClicked} className="see-all-products text-center mx-auto">{props.buttonText}</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddProduct
