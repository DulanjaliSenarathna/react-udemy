import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
import ProductsProvider from './context/products-context'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductsProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductsProvider>);
