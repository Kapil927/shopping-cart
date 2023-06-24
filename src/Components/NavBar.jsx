import React from 'react'
import {BsFillCartFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from './logo.png'

export default function NavBar() {
  const {Cart} = useSelector((state)=>state)
  return (
    <div className=' bg-black grid place-items-center w-full fixed' >
      <nav className='flex justify-between w-[20rem] md:w-[65%] items-center'>
      <NavLink to="/"><img src={logo} alt='Logo' width={150} /> </NavLink>
      <div className='flex gap-2'>
      <NavLink to="/"><h4 className='text-white'>Home</h4></NavLink>
      <NavLink className={'relative'} to={"/Cart"}>
          <BsFillCartFill size={25} color='white'/>
          {
            Cart.length>0 && <div className='absolute top-0 -right-1 h-4 aspect-square bg-green-600 text-white text-xs font-semibold grid place-items-center rounded-full animate-bounce'><span>{Cart.length}</span></div>

          }
      </NavLink>
      </div>
      </nav>
    </div>
  )
}
