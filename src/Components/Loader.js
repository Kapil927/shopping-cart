import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='grid place-items-center w-[100vw] h-[150vh]'>
       <div className="lds-ripple"><div></div><div></div></div>  {/*loader copied from web easy */}
         <p className='text-white font-bold'>Loading...</p>
    </div>
  )
}

export default Loader
