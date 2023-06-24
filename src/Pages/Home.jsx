import React from 'react'
import ProductCards from '../Components/ProductCards';
import Loader from '../Components/Loader'
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Home() {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false);
    const API_URL = "https://fakestoreapi.com/products";

    async function fetchData(){
        setLoader(true);
        try{
            const response = await fetch(API_URL);
            const data = await response.json();
            setProducts(data);
        }
        catch(e){
           toast.error("Data not fetched");
           setProducts([]);
        }
        setLoader(false);
    }

    useEffect(()=>{fetchData()},[]);

  return (
    <div className='mt-14'>
      {
        loader?<Loader/>:<ProductCards products={products}/>
      }
    </div>
  )
}
