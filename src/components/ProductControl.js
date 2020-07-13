import React, { Component } from 'react';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import tshirt from '../images/products/tshirt.png';
import backpack from '../images/products/backpack.png';
import pants from '../images/products/pants.png';
import trekkingshoes from '../images/products/trekkingshoes.png';
import giacket from '../images/products/giacket.png';
import tshirt_ladies from '../images/products/tshirt_ladies.png';
import Default_image from '../images/product_image.jpeg'

const actualProductList = [
    {
        name: 'T-Shirt',
        price: '599',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        photo: tshirt,
        quantity: 40,
        id: "1"
    },
    {
        name: 'BackPack', 
        price: '1500',
        quantity: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        photo: backpack,
        id: "2"
    },
    {
        name: 'Pants', 
        price: '1000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        quantity: 15,
        photo: pants,
        id: '3'
    },
    {
        name: 'Trekking Shoes',
        price: '2000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        quantity: 10,
        photo: trekkingshoes,
        id: '4'
    },
    {
        name: 'Jacket',
        price: '1500',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        quantity: 5,
        photo: giacket,
        id: '5'
    },
    {
        name:'T-Shirt Ladies',
        price: '650',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        quantity: 50,
        photo: tshirt_ladies,
        id: '6'
    }
]
class ProductControl extends Component {
    
    constructor(props)  {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            actualProductList: actualProductList,
            quantity: actualProductList.quantity,
            selectedProduct: null
        };
    }
    
    handleAddButtonClick = (id) =>{
        const BuyProduct = this.state.actualProductList.filter(product => product.id === id)[0];
        BuyProduct.quantity = BuyProduct.quantity - 1;
        if (BuyProduct.quantity <= 0) {
            BuyProduct.quantity = "Product is not Available"
        }
        this.setState({
            selectedProduct: BuyProduct
        })
    }

    handleClick = () => {
        if (this.state.selectedProduct != null){
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
    // Method to handle adding a new product
    handleAddingNewProduct = (newProduct) =>{
        if (newProduct.photo === undefined){
            newProduct.photo = Default_image
        }
        const newProductList = this.state.actualProductList.concat(newProduct)
        this.setState({
            actualProductList: newProductList,
            formVisibleOnPage: false
        })
    };
    // Method to handle click event on a product
    handleChangingSelectedProduct = (id) => {
        const selectedProduct = this.state.actualProductList.filter(product => product.id === id)[0];
        this.setState({selectedProduct: selectedProduct});
        // console.log(selectedProduct)
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        // let addProductButton = null;
        if (this.state.selectedProduct != null){
            currentlyVisibleState = < ProductDetail product = {this.state.selectedProduct} onBuyButtonClick ={this.handleAddButtonClick} />
            buttonText = "Back to product list"
        }else if (this.state.formVisibleOnPage){
            currentlyVisibleState = <NewProductForm onNewProductCreation = {this.handleAddingNewProduct} />
            buttonText = "Back to product list"
        }else{
            currentlyVisibleState = <ProductList productList = {this.state.actualProductList} onProductSelection={this.handleChangingSelectedProduct}  />
            buttonText = "Add a product"
            // addProductButton = <button onClick={this.handleClick} className="see-all-products text-center mx-auto">Add a product</button>
        }
        return (
            <React.Fragment>
                <div className="section-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-12 col-md-6"></div>
                            <div className="col-sm-12 col-12 col-md-6">
                                <div className="float-md-right">
                                    {/* {addProductButton} */}
                                    <button onClick={this.handleClick} className="see-all-products text-center mx-auto">{buttonText}</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {currentlyVisibleState}
            </React.Fragment>
        )
    }
}

export default ProductControl;
