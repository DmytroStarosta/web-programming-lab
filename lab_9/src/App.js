import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation';
import Header from './containers/App/Header/header';
import Footer from './containers/App/Footer/footer';
import { ProductProvider } from './containers/Context/ProductContext';
//import { FilterProvider } from './containers/Context/FilterContext';


function App() {
  return (
    <ProductProvider>
      <Router>
        <Header></Header>
        <Navigation></Navigation>
        <Footer></Footer>
      </Router>
    </ProductProvider>
  );
}

export default App;
