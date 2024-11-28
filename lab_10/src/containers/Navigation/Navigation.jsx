import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Catalog from '../Catalog_page/Catalog';
import ItemPage from '../Item_page/Item';


function Navigation() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/item/:id" element={<ItemPage />} />
    </Routes>
  );
}

export default Navigation;
