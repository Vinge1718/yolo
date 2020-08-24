import React from 'react'; 
// import '../App.css';
import Header from './Header';
import ProductControl from './ProductControl';
import AboutUs from './AboutUs';
import Footer from './Footer';

function App() {
  return (
    <div className="container-fluid">
      {/* <h1> App</h1> */}
      <Header />
      <ProductControl />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
