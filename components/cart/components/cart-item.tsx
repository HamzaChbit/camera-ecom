import useCart from '@/hooks/use-cart'
import { Product } from '@/types'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



interface CartItemProps {
    data : Product
}

const CartItem:React.FC<CartItemProps> = ({data}) => {
    const cart = useCart()
    const onRemove = () => {
        cart.removeItem(data.id)
    }
    const truncateString = (str:string,num:number  ) =>{
      if(str?.length > num) {
        return str.slice(0,num) 
      }else{
        return str
      }
    }


  return (
    <li className='product ' >
  
            <div  className="relative flex flex-col justify-between sm:ml-6 py-5 px-20  rounded-2xl w-full" >
     
        

       <div  className='flex flex-row items-center ' >
            <Image src={data.images[0].url}  width={64} height={54}  alt='image ' className='object-cover object-centre   ' />
                <p className='flex text-xl font-semibold ml-4 text-white' > {truncateString(data.name,15)}</p>
       </div>
           <div   >
                    <X  className='absolute  text-white top-0 cursor-pointer right-0  hover:text-yellow-200 '  onClick={onRemove} size={25} />
           </div>
        

        
         

        
            <div className=' flex text-sm flex-row justify-between  items-center ' >

            <h1  className='text-bold text-yellow-400 text-2xl' >   ${ data.price}</h1>

            <div   className='flex flex-row w-30 ' >
          <button  className='border-2  bg-yellow-400 text-black text-3xl font-black '  onClick={() => cart.incrementQuantity(data.id)}>+</button>
                    <input  className='border-none  w-10 ' 
                        type="number"
                        min="1" // Minimum value is 1
                        value={data.quantity}
                        onChange={(e) => cart.editQuantity(data.id, parseInt(e.target.value))}
                    />
                    <button className='border-2 bg-yellow-400 text-black text-3xl font-black' onClick={() => cart.decrementQuantity(data.id)}>-</button>
          </div>
             
            </div>
          

       
      </div>

    </li>
  )
}

export default CartItem