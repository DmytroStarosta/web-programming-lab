import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation';
import Header from './containers/App/Header/header';
import Footer from './containers/App/Footer/footer';
import { ProductProvider } from './containers/Context/ProductContext';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ProductProvider>
        <Router>
          <Header></Header>
          <Navigation></Navigation>
          <Footer></Footer>
        </Router>
      </ProductProvider>
    </Provider>
  );
}

export default App;
