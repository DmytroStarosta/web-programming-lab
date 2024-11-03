import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation';
import Header from './containers/App/Header/header';
import Footer from './containers/App/Footer/footer';


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
