
import getBillboard from '@/actions/get-billboard'
import getCategories from '@/actions/get-categories'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React from 'react'

import MainNav from './ui/MainNav'


const Hero=  async () => {

    const billboard = await getBillboard('66a89dda-8451-48e0-ab8a-31a15c640e27')

    const categories = await getCategories();


  return (
    <div   className='  text-white bg-body h-full  pt-10 mx-auto max-w-7xl ' >
        <div     className=' justify-between rounded-xl  flex flex-row   w-full   lg:w-full '  >
            {/* left side */}
             <div   className=' bg-primary k mx-8    rounded-xl    lg:block  md:hidden sm:hidden ' >
                <div  className='bg-yellow-500 flex justify-center items-center  rounded-t-xl py-3 ' >
                    <h2  className='text-black  py-1 font-bold' >BROWE CATEGORIS</h2>
                </div>
                <div  className='mt-3 px-5 '  >
              <MainNav data={categories} />

                  
                   
                </div>
          

            </div>
{/* lawst */}
<div className= '  bg-primary text-white   rounded-xl xl:w-auto  md:mx-12    md:w-[300px] '     >

    <div  className='flex flex-row justify-between w-full z-0 ' >
    <div  className='text-bold mt-10  ml-2 px-10 py-10 ' >
        <h3  className='text-2xl mb-8 font-medium   md:text-md ' >Special OFFER</h3>
        <h1  className='text-bold text-5xl   font-black md:text-md' >SAVE 20% <br /> ON YOUR <br />FIRST ORDER</h1>
        <Link  href='/product/2b26bc28-140b-4f69-9ad2-5d57bfaa5566' > <button className='bg-yellow-400 rounded-xl mt-10 text-black px-7 py-3 hover:text-white '>SHOP NOW</button></Link>
       
    </div>
    <div className='px-10 py-10  xl:block md:hidden' >
           <Image    src={billboard.imageUrl} width={400} height={240 } alt='banner' className='mt-20 mr-4' />
       
    </div>


    </div>





        
          

            </div>
            <div   className='  mx-8 max-w-[450px]  h-[600px]   flex flex-col justify-between   ' >
                <div  className='bg-primary font-medium px-10 rounded-xl h-full py-10  flex items-center justify-between ' >
                    <div>
                    <h1>SAVE 35% ALL <br /> DSLR CAMERAS  </h1>
                    <Link  href='/product/aecee4e9-f907-450b-84e8-c1a713b239e5' >
                    <button className='text-yellow-400 mt-4 border-none hover:text-white  '  >SHOP NOW</button>
                    </Link>
                      
                    </div>
                    <div>
                    <Image  src='/files/compact/2.png' width={150} height={140 } alt='banner'  />
                    </div>
          
                </div>

                <div  className='bg-primary px-10 font-medium py-10 rounded-xl  h-full  mt-10  flex items-center justify-between    ' >
                <div  >
                <h1>SAVE 25% <br /> MIRRORLESS <br /> CAMERAS  </h1>
                <Link  href='/product/f7c1c754-347d-47ca-a336-1fab1450ab98' >
                    <button className='text-yellow-400 mt-4 border-none hover:text-white  '  >SHOP NOW</button>
                    </Link>

                </div>
                <div>
                <Image  src='/files/compact/3.png' width={150} height={140 } alt='banner'  />
                </div>

                </div>
           
          

            </div>







    </div>
    </div>

  )
}

export default Hero