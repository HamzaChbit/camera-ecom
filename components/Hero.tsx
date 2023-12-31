
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
    <div   className='  text-white bg-body h-full  md:mx-auto  pt-10  mx-0   md:max-w-7xl     w-full ' >
        <div     className='  rounded-xl  flex md:flex-row  flex-col  justify-between   h-auto   '  >
            {/* left side */}
             <div   className=' bg-primary  md:mx-8 mx-0   hidden rounded-xl  md:block ' >
                <div  className='bg-yellow-500 flex justify-center items-center  rounded-t-xl py-3 ' >
                    <h2  className='text-black  py-1 font-bold' >BROWE CATEGORIS</h2>
                </div>
                <div  className='mt-3 px-5 '  >
              <MainNav data={categories} />

                  
                   
                </div>
          

            </div>
{/* lawst */}
<div className= '  bg-primary text-white px-5 py-5 rounded-xl   md:w-full  md:mx-0 mx-2 h-auto'     >

    <div  className='flex md:flex-row flex-col-reverse justify-center items-center  z-0 ' >
    <div  className='text-bold w-full  flex flex-col   ' >
        <h3  className='md:text-2xl text-xl py-5 font-medium  text-yellow-400  ' >Special OFFER</h3>
        <h1  className='text-bold md:text-5xl   font-black text-2xl  py-5' >SAVE 20% <br /> ON YOUR  FIRST ORDER</h1>
        <Link  href='/product/2b26bc28-140b-4f69-9ad2-5d57bfaa5566' > <button className='bg-yellow-400 rounded-xl md:mt-10  mt-4 text-black md:px-7  px-4 md:py-3 py-2 hover:text-white '>SHOP NOW</button></Link>
       
    </div>
        <div  className=' w-[152px] md:w-[330px]   ' >
                   <Image    src={billboard.imageUrl} width={330} height={240 } alt='banner' />
        </div>
    
       



    </div>



            </div>
<div   className='hidden md:block    w-full' >

   <div   className='    mx-2  flex flex-col justify-between gap-y-2     ' >
                <div  className='bg-primary font-medium  rounded-xl   py-10  md:px-10  px-2  flex items-center justify-between   ' >
                    <div  >
                    <h1  >SAVE 35% <br /> ALL  DSLR CAMERAS  </h1>
                    <Link  href='/product/aecee4e9-f907-450b-84e8-c1a713b239e5' >
                    <button className='text-yellow-400 mt-3 border-none hover:text-white font-black  '  >SHOP NOW</button>
                    </Link>
                      
                    </div>
                    <div>
                    <Image  src='/files/compact/2.png' width={150} height={140 } alt='banner'  />
                    </div>
          
                </div>

                <div  className='bg-primary md:px-10  px-2   font-medium  rounded-xl     py-10  flex items-center justify-between    ' >
                <div  >
                <h1>SAVE 25%  <br /> MIRRORLESS  CAMERAS  </h1>
                <Link  href='/product/f7c1c754-347d-47ca-a336-1fab1450ab98' >
                    <button className='text-yellow-400 font-black mt-3 border-none hover:text-white  '  >SHOP NOW</button>
                    </Link>

                </div>
                <div>
                <Image  src='/files/compact/3.png' width={150} height={140 } alt='banner'  />
                </div>

                </div>
           
          

            </div> 



</div>
          







    </div>
    </div>

  )
}

export default Hero