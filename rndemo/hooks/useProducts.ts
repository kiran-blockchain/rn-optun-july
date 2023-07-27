import { useEffect, useState } from "react"

export const useProducts =()=>{
    const[productList,getProductList] = useState([]);
    //console.log("loading products");
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(result=>{
            return result.json();
        }).then(final=>{
           // console.log(final);
            getProductList(final.products);
        }).catch(ex=>{
            return [];
        })
    },[])
    return productList;
}