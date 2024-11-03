import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Catalog from '../Catalog_page/Catalog';
import Cart from '../Cart_page/Cart';


function Navigation() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default Navigation;