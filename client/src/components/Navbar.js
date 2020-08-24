import React from 'react';
import logo from '../images/logo/logo.png';
import shop from '../images/logo/shop.png';

function Navbar () {
    
    return (
        <React.Fragment>

            <nav className="navbar  navbar-expand-lg navbar-light top-navbar navbar-fixed-top" data-toggle="sticky-onscroll">

                <div className='container'>

                    <a className="navbar-brand" href="/">
                        <div className="logo float-md-left">
                            <img src= {logo} alt="logo" className= "img-fluid"/>
                        </div>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                        <ul className="navbar-nav float-md-left">

                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#products">Products</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link shop-img" href="/">
                                    <img src={shop} alt="logo" className="img-fluid" /> 
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>
            
        </React.Fragment>
    )
}

export default Navbar;
