import getCategories from '@/actions/get-categories';
import getCategory from '@/actions/get-category';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';

import Container from '@/components/ui/container';
import MainNav from '@/components/ui/MainNav';
import ProductCard from '@/components/ui/ProductCard';

import { Category } from '@/types';

import React from 'react'


interface CategoryPageProps {
  params: {
    categoryId : string

  }
}

export const revalidate=0;
const  CategoryPage:React.FC<CategoryPageProps> =  async ({params}) => {

  const category = await getCategory(params.categoryId)
  const categories = await getCategories();

  const products = await getProducts({ 

    categoryId : params.categoryId,
   
    });




  return (

   <div className='bg-body py-5 h-auto'  data-aos="fade-up">


       <Container  >
      <div className='  max-w-7xl   z-10 md:mx-auto  mx-4 ' >


         <div   className='  text-white  flex md:flex-row flex-col  md:pt-10 pt-2   ' >
      
            {/* left side */}
             <div   className=' bg-primary w-[20%] mx-4  h-[50vh] rounded-xl    md:block  hidden  '  data-aos="fade-up">
                <div  className='bg-yellow-500 flex justify-center   rounded-t-xl py-3 ' >
                    <h2  className='text-black  py-1 font-bold' >BROWE CATEGORIS</h2>
                    </div>
               
                <MainNav data={categories} />
                </div>

     
        {/* left slide categoy */}
      
        <div  className='  h-full w-full '  >
          <h2 className='text-white text-bold  font-semibold mx-5  mb-3 text-xl' >{category.name} CAMMERAS</h2>
        
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-10 w-auto  ' data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine">

  
        {products.map((item)=> (
            <ProductCard key={item.id} data={item} />
          ))}

</div>   

                  
              </div> 

              </div>

       


      </div>
      </Container>
      </div>
   
  )
}

export default  CategoryPage