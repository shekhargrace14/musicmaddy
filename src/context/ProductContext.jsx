import { createContext, useEffect, useReducer, useState } from "react";


import ProductReducer from "./ProductReducer";
const ProductContext = createContext();

const initialState = {
    products: []
}

const ProductProvider = ({children}) =>{

    const [state,dispatch] = useReducer(ProductReducer, initialState)

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://script.google.com/macros/s/AKfycbxGeudrBKjY7l4P0_tifJs2wEqmucIvXSS9P2ZEW6_6FlfHDCSnqhTa1zeScmaNm4mafA/exec?action=songsData");
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        dispatch({ type: 'SET_PRODUCTS', payload: products });
    }, [products]);
    
    console.log(state.products)
    return(
        <ProductContext.Provider value={{state,dispatch}}>{children}</ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider};