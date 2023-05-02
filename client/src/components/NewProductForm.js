import React from 'react';
// import {v4} from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewProductForm (props) {
    

    // function onFileChange(event){
    //     // console.log(event.target.files[0])
    //     // const file=  event.target.files[0]
        

    //     props.onPhotoUpload({
    //         file: event.target.files[0]
    //     })
    // }

    function handleNewProductFormSubmission(event){
        // event.persist()
        event.preventDefault();

        // console.log(event.target.name.value);
        // console.log(event.target.price.value);
        // console.log(event.target.files[0]);
        // console.log(photo)
        
        props.onNewProductCreation({
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value,
            quantity: event.target.quantity.value,
            // id: v4()
        });
    }
   
    return (
        <React.Fragment>
            <div className="container product-form">
                <ReusableForm 
                formSubmissionHandler ={handleNewProductFormSubmission}
                buttonText = 'Add Product' />
            </div>
        </React.Fragment>
    )
    
}

NewProductForm.propTypes = {
    onNewProductCreation: PropTypes.func
}

export default NewProductForm;
