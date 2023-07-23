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
        <div className='h-[100vw] bg-primary fixed right-0 top-0 z-10 transition-2xl
        ' >
            <div className='h-[100vh] float-right px-10 w-[600px] '>
            <button
            type='button'
            className='text-white py-2  flex items-center text-2xl font-bold ml-2 gap-4 '
            onClick={()=> setShowCart(false)} 
            >
            <X size={34}  className='border-none ' />
     
          </button>
          <div className='product-container'>
          {cart.items.length === 0 &&  <p  className='text-white font-bold flex justify-center text-2xl' >No  items added to cart</p>}
          <ul  >{cart.items.map((item)=> (
                    <CartItem  key={item.id}  data={item}  />
                ))}</ul>
     </div>
         

<Summary/>



            </div>
        </div>
      
    </div>
  )
}

export default  CartModel
