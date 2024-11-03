import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './сontainers/Navigation/Navigation';
import Header from './сontainers/App/Header/header';
import Footer from './сontainers/App/Footer/footer';


function App() {
  return (
    <Router>
      <Header></Header>
      <Navigation></Navigation>
      <Footer></Footer>
    </Router>
  );
}

export default App;
