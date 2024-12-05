import React from 'react';
import ProductList from './ProductList';
import CatalogHeader from './CatalogHeader';
import { ProductProvider } from '../Context/ProductContext';

function CatalogPage() {
    return (
            <ProductProvider>
                <div>
                    <CatalogHeader />
                    <ProductList />
                </div>
            </ProductProvider>
    );
}

export default CatalogPage;
