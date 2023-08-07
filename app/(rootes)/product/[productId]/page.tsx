



import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import FeaturedBanner from '@/components/FeaturedBanner'

import Info from '@/components/info'
import Container from '@/components/ui/container'


import Image from 'next/image'
import React from 'react'

interface ProductPageProps {
    params :{
        productId : string
       
    },
   
}
export const revalidate=0;

const ProductPage:React.FC<ProductPageProps>  = async ({params}) => {
    const product = await getProduct(params.productId);
  

    const Products = await getProducts({ 
      // categoryId: product?.category?.id,
      categoryId: product?.category?.id,
      isFeatured:true
      });

     
      
    

    if (!product) {
        return null;
      }
  

  return (
    <div className="bg-primary   ">
    <Container>
      <div className="px-4 py-0  max-w-7xl h-full   pt-5  mx-auto ">
     <div   className='flex gap-5 md:flex-row flex-col  h-full' >
        <div  className='bg-primary w-full  flex items-center justify-center  ' >
          <Image  width={350} height={250} alt='product image'  src={product.images?.[0].url} className= ' md:w-[350px] w-[200px] md:h-[250px] h-[150px] '/>
        </div>

            
      
          <div className="  px-4 h-auto ">
         <Info  data={product} />
         </div>
        </div>
     
      <FeaturedBanner items={Products}  />
    
  
      </div>
    </Container>
  </div>  
  )
}

export default ProductPage