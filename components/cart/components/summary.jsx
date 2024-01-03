'use client'
import useCart from '@/hooks/use-cart'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import React ,{useEffect} from 'react'
import { toast } from 'react-hot-toast'
import ReactWhatsapp from 'react-whatsapp'
export const revalidate=0;
const  Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const cart = useCart()
  const route = useRouter()
  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0);

  
  
  const message = cart.items.map((item) => (
    `Name: ${item.name} |---| Quantity: ${item.quantity}`
  )).join('\n');






       
  return (
    
  
    <div>

{cart.items.length >= 1 && 
 <><div className='flex justify-between flex-row mx-5 '>
          <h2 className="text-base font-medium text-white">Subtotal</h2>
          <h2 className=' font-medium text-md text-white'>${totalPrice}</h2>
        </div><div className='flex justify-between flex-row  mx-5'>
            <h2 className="font-bold  text-2xl text-white">Total</h2>
            <h2 className=' font-bold text-2xl text-white'>$ {totalPrice}</h2>
          </div><div className='flex md:flex-row    flex-col   '>
            <button onClick={removeAll} className="md:w-full  gap-x-5 md:mx-2 mx-3   rounded-xl text-black  bg-yellow-400 border-none  md:px-0 md:py-2  px-0 py-1 mt-3">
              CLEAR CART
            </button>
            <ReactWhatsapp number="+212 694977110" className="md:w-full  ] md:mx-2   mx-3 bg-yellow-400 rounded-xl md:px-0 md:py-2  px-0 py-1 border-none mt-2" message={message + `  |--------| Total Price :  ${totalPrice}`} >Checkout in Whatsapp    </ReactWhatsapp>
          </div></>



}
   
   
    </div>
  
  )
}

export default Summary