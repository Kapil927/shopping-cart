import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className=' h-full flex flex-col items-center justify-center gap-4'>
      <p className='font-bold'>Your Cart is empty !</p>
      <Link to={"/"}><button className='border rounded-lg px-4 py-2 bg-green-400 text-white'>Shop Now</button></Link>
    </div>
  )
}
