import React from 'react';
import '../App.css';
import Navbar from './Navbar';

function Header () {
    
    return (
        <React.Fragment>
            <div className='section-1'>
                <div className="container">
                    <div className="row">
                        <Navbar />
                        
                        <div className="col-12">
                            <div className="title d-flex">
                                <div className="justify-content-center align-self-center w-100">
                                    <div className="big-title text-center">Our Clothing, Your Comfort</div>
                                    <div className="title-desc text-center">
                                        We understand that you need to look good and feel great. <br/>
                                        It all starts with what you are are wearing.                                 
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="text-center chevron-down">
                                <a href="#products">
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </a>
                            </div>

                        </div> 

                    </div>
                </div>

            </div>
        </React.Fragment>
    )
    
}

export default Header;
