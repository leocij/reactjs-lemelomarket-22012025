import React, { useState, useEffect } from "react";
import * as productService from "../../services/ProductService";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => { reloadProducts(); }, []);

    const reloadProducts = async () => {
        try {
            const response = await productService.getAllProducts();
            if (response && response.status === 'success') {
                setProducts(response.data);
                console.log(response.data);
            } else {
                setError(response.message);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    return (
        <>
        </>
    );
}