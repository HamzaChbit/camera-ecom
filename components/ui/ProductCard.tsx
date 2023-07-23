"use client";
import useCart from '@/hooks/use-cart';
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MouseEventHandler } from "react";
import React from 'react'




interface ProductCardProps {
    data : Product
    
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {

  const router = useRouter()

  const truncateString = (str:string,num:number  ) =>{
    if(str?.length > num) {
      return str.slice(0,num) 
    }else{
      return str
    }
  }

  const handelClick = () => {
    router.push(`/product/${data?.id}`)
  } 
  // const cart = useCart();
  // const onAddToCart= () => {
   

  //   cart.addItem(data);
  // };

  return (
 
    
    
   
    <div     onClick={handelClick}  className=" items-center  px-5 rounded-xl w-[200px] mx-8 bg-primary z-0 group sm:w-[200px] md:w-[280px] lg:w-[350px] lg:mx-6   inline-block cursor-pointer relative p-2 " >
        <div   className='bg-yellow-500 w-10 absolute right-1   box-border h-6 rounded-2xl text-black flex items-end '>
            <div className='flex  absolute right-1 justify-end' >
            NEW
            </div>
           

       
       
           
            </div>

        <div  className='mt-10' >
        <Image  src={data.images?.[0]?.url} width={160} height={140} alt='product' />
            <h1   className='text-white text-xl font-bold mt-5 ' >   {truncateString(data.name,15)}</h1>
            <h2  className='text-yellow-500 text-xl font-bold mt-5' >${data.price}</h2>
           
        </div>
      
    </div>
 
  )
}

export default ProductCard
