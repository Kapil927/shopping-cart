import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Add } from '../Redux/Slices/CartSlice';
import { Remove } from '../Redux/Slices/CartSlice';

export default function ProductCard(props) {
  const Cart = useSelector((state)=>state.Cart)
    const products = props.products; 
    const dispatch = useDispatch();
    function addToCart(product){
      toast.success("Added to Cart");
      dispatch(Add(product))
    }
    function removeFromCart(id){
      toast.success("Removed from Cart");
      dispatch(Remove(id))
    }
    return (
    
    <div className='flex flex-wrap gap-3'>
      {
        products.map((product)=>{
            return(
                <div key={product.id} className='w-[12.2rem] h-[19rem] shadow-md flex flex-col justify-around  items-center p-2 overflow-hidden hover:scale-110 transition-all duration-300 hover:shadow-2xl rounded-xl'>
                <h2 className='font-bold text-md'>{`${product.title.substring(0,15)}...`}</h2>
                <p className='font-extralight text-sm text-center'>{`${product.description.substring(0,40)}...`}</p>    
                <div className='h-[140px]'>
                <img src={product.image} className='w-full h-full' alt='img' loading='lazy' />
                </div>
                <div className='flex justify-between w-[90%] align-baseline'>
                  <p className='text-green-600 font-bold text-sm py-0'>${product.price}</p>
                    {
                      Cart.some((p)=>p.id === product.id)
                      ?<button onClick={()=>removeFromCart(product.id)}  className='border-2 border-black rounded-full py-0 px-2 text-sm hover:text-white hover:bg-black'>
                      Remove
                      </button> 
                      :<button onClick={()=>addToCart(product)}  className='border-2 border-black rounded-full py-0 px-2 text-sm hover:text-white hover:bg-black'>
                      Add To Cart
                      </button>

                    }
                </div>
                </div>
            )
        })
      }
    </div>
  )
}
