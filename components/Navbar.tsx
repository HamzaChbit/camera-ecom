'use client'

import useCart from '@/hooks/use-cart'
import { useStateContext } from '@/hooks/use-state'


import { Search , ShoppingCart } from 'lucide-react'
import Link from 'next/link'


import React, {  useEffect,useRef, useState} from 'react'
import { MdOutlineClose } from 'react-icons/md'
import CartModel from './cart/cart-model'




const Navbar: React.FC = () => {
  const  {
    showCart ,
    setShowCart,
   
   
  } = useStateContext()

 const [showMenu,setShowMenu] =useState(false)

 
const cart = useCart()



  function handlClick( ) {
  
        setShowMenu(false)

}


  

  return (
<header className="text-white-600  bg-black body-font">
  <div className="container mx-auto flex flex-row p-5 justify-between  items-center">
  <div     className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-white cursor-pointer overflow-hidden group' onClick={()=>setShowMenu(true)} >
                <span  className='w-full h-[2px] bg-yellow-500 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300 ' ></span>
                <span  className='w-full h-[2px] bg-yellow-500 inline-flex transform translate-x-3   group-hover:translate-x-0 transition-all ease-in-out duration-300 ' ></span>
                <span  className='w-full h-[2px] bg-yellow-500 inline-flex transform   translate-x-1  group-hover:translate-x-3 transition-all ease-in-out duration-300 ' ></span>

            </div>
            {showMenu && (
                <div
                className='absolute mdl:hidden top-0 left-0 w-[50%] z-10 h-full bg-body bg-opacity-100 flex flex-col items-start'
                 onClick={handlClick}  >
                  <div   className='w-[80%] h-full  bg-body flex flex-col items-center px-4 py-10 relative'>
                  <MdOutlineClose  className='text-3xl text-yellow-500 cursor-pointer hover:text-white absolute top-4 right-4' onClick={()=>setShowMenu(false)} />
                  <div   className=' bg-primary h-[50vh] w-[80%]  rounded-xl    ' >
                <div  className='bg-yellow-500 flex justify-center items-center  rounded-t-xl py-3 ' >
                    <h2  className='text-white  py-1 font-bold' >BROWE CATEGORIS</h2>
                
                </div>

  <nav    className="mx-4  my-1  flex  font-medium items-centre flex-col text-white h-[250px] ">

 
                  <ul  className='flex flex-col gap-y-8  ' >
                    <Link className='hover:text-yellow-500'  href='/category/4ee00058-4e5f-4fcf-a9c8-69c42fcc7622'>COMPCT</Link>
                    <Link className='hover:text-yellow-500' href='/category/6fff530f-b4cc-477d-9e67-db5e58d1aa6c'>MIRRORLESS</Link>
                    <Link className='hover:text-yellow-500' href='/category/90088ac0-b56f-4b04-bb9b-c90fb534efb0'>DSLR</Link>
                    <Link className='hover:text-yellow-500'  href='/category/d44d98c4-75e8-416c-9009-bed2d11a798f'>PROFESSIONAL</Link>
                    <Link className='hover:text-yellow-500'  href='/category/dfc412af-ab4f-4b84-b59e-336b49cd0a66'>FILM</Link>
                  </ul>
                  </nav>
                </div>
                  
             

            </div>
                 
                
           

                  </div>
              
                
            
         )}
   













    <nav className="flex w-2/5  flex-wrap  text-base md:ml-auto">
        <Link href='/' >   <h1 className="mr-5 font-bold cursor-pointer text-white">PHOTO<span className='text-yellow-500'>LAND</span></h1></Link>
   
    
    </nav>

  
  <main className='flex flex-row items-center  rounded-md   lg:block  sm:hidden ' >
    <div className='flex  rounded bg-white  justify-between   w-96' >
 <input   type="search" placeholder='Search    ' className='rounded-xl w-full  border-none  py-2 px-15' />
       <button className='bg-yellow-500   py-3' >
       <Search size={16} className='text-white   ' />
       </button>
    </div>


    



  

  </main>




   
  
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0  relative m-0" >
    <button  onClick={()=> setShowCart(true)}  className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
    <ShoppingCart size={30} className='text-white cursor-pointer' />
    <span className=' absolute top-5 w-6 h-5 rounded-full bg-yellow-500 text-black' >{cart.items.length} </span>
    
        </button>
        {showCart && <CartModel/>}

     
    </div>
  </div>
</header>
  )
}

export default Navbar
