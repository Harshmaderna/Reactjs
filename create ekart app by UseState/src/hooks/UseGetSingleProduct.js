import { useEffect, useState } from "react"

const UseGetSingleProduct = (id) => {
    const [singleProduct, setSingleProduct] = useState(null)
    useEffect(() => {
        fetchData()
    },[id])

    const fetchData = async() => {
        const res = await fetch(`https://fakedtoreapi.com/products/${id}`);
        const data = await res.json();
        setSingleProduct(data)
    }
    return singleProduct
}


export default UseGetSingleProduct