'use client'
import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import ProductCard from './ui/ProductCard'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

interface FeaturedBannerProps {
  items : Product[]
}

const FeaturedBanner:React.FC<FeaturedBannerProps>  = ({items}) => {
  const sliderLeft = ( ) =>{
    const slider:any = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
}
const sliderRight = ( ) =>{
    const slider:any = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
}

  return (
<div  className='max-w-7xl   z-0 mt-3 mx-auto ' >


    <h1  className='text-white my-10  mx-20 font-bold text-2xl' >Related Product</h1>
    <section  className=" h-full flex flex-warp items-center mx-4   group">
       
        
       
       < MdChevronLeft  onClick={sliderLeft}  className="bg-white text-black  left-0 rounded-full  opacity-50 hover:opacity-100 cursor-pointer  w-40  " size={40}/>
      <div    id='slider' className=' h-full  overflow-x-scroll whitespace-nowrap flex flex-row scroll-smooth no-scrollbar  relative'>
      {items.map((item)=> (
        <ProductCard   key={item.id}  data={item} />
      ))
      }
      </div>
      <MdChevronRight   onClick={sliderRight} className="bg-white text-black  right-0 rounded-full  opacity-50 hover:opacity-100 cursor-pointer  w-40   " size={40}/>
  </section>
  </div>
  )
}


export default FeaturedBanner;