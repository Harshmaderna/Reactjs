import { useEffect, useState } from "react";

const useGetSigleProduct = (Id) => {
    const [singleProduct, setSingleProduct] = useState({})
    useEffect(() => {
        fetchData();
    },[Id])
    const fetchData = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${Id}`)
        console.log(res)
        const data = await res.json()
        setSingleProduct(data)
    };
    return singleProduct;
};


export default useGetSigleProduct;