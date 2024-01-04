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
  

  return (
 
    
    
   
    <div     onClick={handelClick}  className="   px-5 w-[350px] rounded-xl  md:mx-4 mx-2  flex justify-center items-center bg-primary z-0  py-2   cursor-pointer relative " >
        <div   className='bg-yellow-500 w-10 absolute right-1 top-0   box-border h-6 rounded-2xl text-black flex  '>
            <div className='flex  absolute right-1 top-0 justify-end items-end' >
            NEW
            </div>
           

       
       
           
            </div>

        <div  className='md:mt-4  mt-2' >
        <Image  src={data.images?.[0]?.url} width={160} height={140} alt='product' />
            <h1   className='text-white text-xl font-bold mt-5 ' >   {truncateString(data.name,15)}</h1>
            <h2  className='text-yellow-500 text-xl font-bold mt-5' >${data.price}</h2>
           
        </div>
      
    </div>
 
  )
}

export default ProductCard
