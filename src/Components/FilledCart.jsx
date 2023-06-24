import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { Remove } from '../Redux/Slices/CartSlice';

export default function FilledCart() {
    const Cart = useSelector((state)=>state.Cart)
    const totalItems =Cart.length;
    const[totalAmount, setTotalAmount] = useState(0);
    useEffect(()=>{
        setTotalAmount(Cart.reduce((acc,curr)=>acc+curr.price,0))
    },[Cart])

    const dispatch = useDispatch();
    function removeFromCart(id){
        toast.success("Removed From Cart");
        dispatch(Remove(id))
      }
  return (
<div className=' h-[100%] flex justify-between flex-col md:flex-row md:w-[65%] mx-auto'>
      <div className='flex flex-col'>
      {
        Cart.map((product)=>{
            return(
                <div key={product.id} className='border-b border-b-black pb-5 flex w-[26rem] gap-4'>
      <div><img src={product.image} width={200} alt='img'></img></div>
      <div className='flex flex-col justify-around'>
        <h2 className='font-bold'>{product.title}</h2>
        <p className='text-sm'>{`${product.description.substring(0,82)}...`}</p>
        <div className='flex justify-between px-2'>
          <p className='h-6 w-6 text-green-500 font-bold'>${product.price}</p>
          <button onClick={()=>removeFromCart(product.id)} className=' h-6 w-6 bg-[#df252582] grid place-items-center rounded-full shadow-[2px_2px_15px_red,-2px_-2px_15px_red]'><RiDeleteBin5Fill size={18}/></button>
        </div>
      </div>
      </div>
            )
        })
      }
      </div>
      <div className='px-4 mb-8 md:mb-20 md:mt-12 md:mr-3 flex flex-col justify-between md:fixed md:right-60'> 
        <div className='md:fixed md:left-[54rem]'>
        <p className='text-green-600 font-semibold hidden md:block'>Your Cart</p>
        <h1 className='text-4xl font-bold text-green-600 hidden md:inline'>SUMMARY</h1>
        <p className='hidden md:block'>Total Items: <span>{totalItems}</span> </p>
        </div>
        <div className='p-2 px-5 md:p-0 md:px-0 flex justify-between bg-white md:flex-col fixed left-0 md:left-[54rem] w-full  md:w-fit bottom-0 md:bottom-16'>
          <div>
          <p className=' md:hidden'>Total Items: <span>{totalItems}</span> </p>
          <p>Total Amount: <span className='font-bold'>${totalAmount}</span></p>
          </div>
          <button className='border rounded-lg px-3 py-1 bg-green-600 text-white hover:bg-white hover:text-green-600 outline hover:outline-2 hover:outline-green-600'>Checkout <span className='hidden md:inline'>Now</span></button>
        </div>
      </div>
    </div> 
  )
}
