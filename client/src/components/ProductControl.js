import React, { Component } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import EditProductForm from './EditProductForm';
// import tshirt from '../images/products/tshirt.png';
// import backpack from '../images/products/backpack.png';
// import pants from '../images/products/pants.png';
// import trekkingshoes from '../images/products/trekkingshoes.png';
// import giacket from '../images/products/giacket.png';
// import tshirt_ladies from '../images/products/tshirt_ladies.png';
// import Default_image from '../images/product_image.jpeg'

// const actualProductList = [...]  // (Keep if needed, but not changed)

class ProductControl extends Component {
    
    constructor(props)  {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            actualProductList: [],  // Already good: Empty array prevents initial map error
            selectedProduct: null,
            editProduct: false,
            uploadPhoto: null
            
        };
    }
    
    // NEW: Separate method to fetch products for reuse (e.g., after add/edit/delete)
    fetchProducts = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/products`)
            .then(res => {
                console.log(res);
                const products = Array.isArray(res.data) ? res.data : [];
                this.setState({
                    actualProductList: products
                });
            })
            .catch(error => {
                console.error('Failed to fetch products:', error);
                this.setState({ actualProductList: [] });
            });
    }

    componentDidMount(){
        this.fetchProducts();  // Use the new method
    }
    
    handleEditProductClick = () =>{
        console.log('HandleEditClick reached!!')
        console.log(this.state.selectedProduct)
        this.setState({
            editProduct: true
        })
    }
    handleAddButtonClick = (id) =>{
        const BuyProduct = this.state.actualProductList.filter(product => product._id === id)[0];
        BuyProduct.quantity = BuyProduct.quantity - 1;
        if (BuyProduct.quantity <= 0) {
            BuyProduct.quantity = "Product is not Available"
        }
        this.setState({
            selectedProduct: BuyProduct
        })
    }

    handleClick = () => {
        if(this.state.editProduct){
            this.setState({
                editProduct: false
            })
        }else if (this.state.selectedProduct != null){
            this.setState({
                formVisibleOnPage: false,
                selectedProduct: null
            });
        }else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    }
    // handlePhotoUpload = (photo)=>{
    //     console.log(photo.file)
    //     this.setState({
    //         uploadPhoto: file.file
    //     })

        
    // }

    // Method to handle adding a new product
    handleAddingNewProduct = (newProduct) =>{
        // if (newProduct.photo === undefined){
        //     newProduct.photo = Default_image
        // }
        // console.log(newProduct.name)
        // const newProductList = this.state.actualProductList.concat(newProduct)
        // var formData = new FormData()

        // formData.append('data',newProduct)
        // for (let key of Object.keys(newProduct)){
        //     formData.set(key, newProduct[key])
        // }
        // formData.append('myFile', this.state.uploadPhoto)

        // console.log(formData)   
        // var formData = new FormData();
        // formData.append('myImage',newProduct);
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };
        // console.log(formData) 
        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }       
        // console.log(...formData)
        axios.post(`${process.env.REACT_APP_API_URL}/api/products`, newProduct)  
            .then(res => {
                console.log(res.data);
                this.fetchProducts();  // NEW: Re-fetch products after add to update list
                this.setState({
                    formVisibleOnPage: false
                });
            })
            .catch(error => {  // NEW: Add error handling for POST
                console.error('Add product error:', error);
                alert('Failed to add product: ' + (error.response ? error.response.data.error : 'Network error'));
            });
    };
    handleDeletingProduct = (id) =>{
        axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${id}`)  
            .then(res => {
                console.log(res.data);
                this.fetchProducts();  // NEW: Re-fetch after delete to update list
            })
            .catch((error) =>{
                console.log(error);
                alert('Failed to delete product: ' + (error.response ? error.response.data.error : 'Network error'));
            });
            this.setState({
                actualProductList: this.state.actualProductList.filter(product => product._id !== id),
                formVisibleOnPage: false,
                selectedProduct: null
            });
    }
    
    // Method to handle click event on a product
    handleChangingSelectedProduct = (id) => {
        console.log(id)
        const selectedProduct = this.state.actualProductList.filter(product => product._id === id)[0];
        this.setState({selectedProduct: selectedProduct});
    }
    handleEditingProduct = (editedProduct) =>{

        axios.put(`${process.env.REACT_APP_API_URL}/api/products/${this.state.selectedProduct._id}`, editedProduct)  
            .then(res => {
                console.log(res.data);
                this.fetchProducts();  // NEW: Re-fetch after edit to update list
                this.setState({
                    editProduct: false,
                    formVisibleOnPage: false
                });
                window.location = '/';
            })
            .catch(error => {  // NEW: Add error handling for PUT
                console.error('Edit product error:', error);
                alert('Failed to edit product: ' + (error.response ? error.response.data.error : 'Network error'));
            });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        // let addProductButton = null;
        if(this.state.editProduct){
            currentlyVisibleState = <EditProductForm  product ={this.state.selectedProduct} onEditProduct = {this.handleEditingProduct} />
            buttonText = "Back to Product Detail "
        }else if (this.state.selectedProduct != null){
            currentlyVisibleState = < ProductDetail product = {this.state.selectedProduct} onBuyButtonClick ={this.handleAddButtonClick}  onDelete = {this.handleDeleteProduct} onDeleteProduct = {this.handleDeletingProduct} onEditProductClick = {this.handleEditProductClick}/>
            buttonText = "Back to product list"
        }else if (this.state.formVisibleOnPage){
            currentlyVisibleState = < NewProductForm onNewProductCreation = {this.handleAddingNewProduct} onPhotoUpload={this.handlePhotoUpload} />
            buttonText = "Back to product list"
        }else{
            currentlyVisibleState = < ProductList productList = {this.state.actualProductList} onProductSelection={this.handleChangingSelectedProduct}  />
            buttonText = "Add a product"
            // addProductButton = <button onClick={this.handleClick} className="see-all-products text-center mx-auto">Add a product</button>
        }
        return (
            <React.Fragment>
                <AddProduct 
                buttonText = {buttonText}
                whenButtonClicked = {this.handleClick}
                />
                
                {currentlyVisibleState}
            </React.Fragment>
        )
    }
}

export default ProductControl;