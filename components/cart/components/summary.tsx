'use client'
import useCart from '@/hooks/use-cart'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React ,{useEffect} from 'react'
import { toast } from 'react-hot-toast'
export const revalidate=0;
const  Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

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
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    });

    window.location = response.data.url;
  }







  return (
    

    <div>


    <div className='flex justify-between flex-row' >
          <h2 className="text-base font-medium text-white">Subtotal</h2>
     <h2  className=' font-medium text-md text-white' >${totalPrice}</h2>
    </div>
    

    <div className='flex justify-between flex-row' >
          <h2 className="font-bold  text-2xl text-white">Total</h2>
     <h2  className=' font-bold text-2xl text-white' >$ {totalPrice}</h2>
    </div>
    
    
     
  
    <div  className='flex flex-row gap-x-10   '>
         <button onClick={removeAll} className="w-full gap-x-5  rounded-xl  bg-yellow-400 border-none  px-2 py-2 mt-3">
      CLEAR CART
    </button>
    <button  onClick={onCheckout}  className="w-full bg-yellow-400 rounded-xl px-2 py-2 border-none mt-3">
      Checkout
    </button> 
    </div>
    </div>
  
  )
}

export default Summary