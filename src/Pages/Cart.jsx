import React from 'react'
import { useSelector } from 'react-redux';
import FilledCart from '../Components/FilledCart';
import EmptyCart from '../Components/EmptyCart';
export default function Cart() {

  const Cart = useSelector((state)=>state.Cart); // same thing fetched by destructuring also dont confuse here const {Cart} = useSelector((state)=>state);
  return (
    <div className='h-[100%] mt-14'>
      {
        Cart.length > 0 ? <FilledCart/> : <EmptyCart/>
      }
    </div>
  )
}
