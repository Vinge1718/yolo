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

// const actualProductList = [
//     {
//         name: 'T-Shirt',
//         price: '599',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
//         photo: tshirt,
//         quantity: 40,
//         id: "1"
//     },
//     {
//         name: 'BackPack', 
//         price: '1500',
//         quantity: 20,
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
//         photo: backpack,
//         id: "2"
//     },
//     {
//         name: 'Pants', 
//         price: '1000',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
//         quantity: 15,
//         photo: pants,
//         id: '3'
//     },
//     {
//         name: 'Trekking Shoes',
//         price: '2000',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
//         quantity: 10,
//         photo: trekkingshoes,
//         id: '4'
//     },
//     {
//         name: 'Jacket',
//         price: '1500',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
//         quantity: 5,
//         photo: giacket,
//         id: '5'
//     },
//     {
//         name:'T-Shirt Ladies',
//         price: '650',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
//         quantity: 50,
//         photo: tshirt_ladies,
//         id: '6'
//     }
// ]
class ProductControl extends Component {
    
    constructor(props)  {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            actualProductList: [],
            selectedProduct: null,
            editProduct: false,
            uploadPhoto: null
            
        };
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/api/products')
            .then(res =>{
                console.log(res)
                this.setState({
                    actualProductList: res.data
                })
            })
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
        axios.post('http://localhost:5000/api/products', newProduct)
            .then(res => console.log(res.data))
        this.setState({
            formVisibleOnPage: false
        })
    };
    handleDeletingProduct = (id) =>{
        axios.delete('http://localhost:5000/api/products/'+id)
            .then(res => console.log(res.data))
            .catch((error) =>{
                console.log(error)
            })
            this.setState({
                actualProductList: this.state.actualProductList.filter(product => product._id !== id),
                formVisibleOnPage: false,
                selectedProduct: null
            })
    }
    
    // Method to handle click event on a product
    handleChangingSelectedProduct = (id) => {
        console.log(id)
        const selectedProduct = this.state.actualProductList.filter(product => product._id === id)[0];
        this.setState({selectedProduct: selectedProduct});
    }
    handleEditingProduct = (editedProduct) =>{

        axios.put('http://localhost:5000/api/products/' + this.state.selectedProduct._id, editedProduct)
            .then(res =>console.log(res.data))
        
        this.setState({
            editProduct: false,
            formVisibleOnPage: false
        })
        window.location = '/';
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        // let addProductButton = null;
        if(this.state.editProduct){
            currentlyVisibleState = <EditProductForm  product ={this.state.selectedProduct} onEditProduct = {this.handleEditingProduct} />
            buttonText = "Back to Product Detail "
        }else if (this.state.selectedProduct != null){
            currentlyVisibleState = < ProductDetail product = {this.state.selectedProduct} onBuyButtonClick ={this.handleAddButtonClick}  onDeleteProduct = {this.handleDeletingProduct} onEditProductClick = {this.handleEditProductClick}/>
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

