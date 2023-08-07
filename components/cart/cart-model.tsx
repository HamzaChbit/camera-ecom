import { useStateContext } from '@/hooks/use-state'
import React from 'react'
import { X } from "lucide-react";
import useCart from '@/hooks/use-cart';
import CartItem from './components/cart-item';
import Summary from './components/summary';

export const revalidate = 0;

const CartModel = () => {
    const cart = useCart()
    const  {
        showCart ,
        setShowCart,
       
       
      } = useStateContext()


   

  
  return (
    <div   className='z-10  ' >
        <div className='h-[100vh] bg-primary fixed right-0 top-0 z-10  
        ' >
            {/* <div className='h-[100vh] float-right px-10 md:w-[600px] w-[50%] '> */}
            <button
            type='button'
            className='text-white py-2  flex items-center text-2xl font-bold ml-2 gap-4 '
            onClick={()=> setShowCart(false)} 
            >
            <X size={40}  className='border-none hover:text-yellow-400' />
     
          </button>
          <div className='product-container h-[70vh] '>
          {cart.items.length === 0 &&  <p  className='text-white font-bold flex justify-center text-2xl' >No  items added to cart</p>}
          <ul  >{cart.items.map((item)=> (
                    <CartItem  key={item.id}  data={item}  />
                ))}</ul>
     </div>
         

<Summary/>



         
        </div>
      
    </div>
  )
}

export default  CartModel
