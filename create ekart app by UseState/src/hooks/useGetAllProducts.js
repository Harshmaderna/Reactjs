import { useEffect, useState } from "react";

const usegetAllProduct = () => {
    const [allProduct, setAllProduct] = useState([])
    useEffect(() => {
        getAllProduct();
    },[])

    const getAllProduct = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        setAllProduct(data);
    }
    return allProduct;
}

export default usegetAllProduct;