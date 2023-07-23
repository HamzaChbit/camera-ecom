


import getCategory from '@/actions/get-category'
import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import FeaturedBanner from '@/components/FeaturedBanner'
import Gallery from '@/components/gallery'
import Info from '@/components/info'
import Container from '@/components/ui/container'
import ProductCard from '@/components/ui/ProductCard'
import useCart from '@/hooks/use-cart'
import { Product } from '@/types'
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
     
      });

     
      
    

    if (!product) {
        return null;
      }
  

  return (
    <div className="bg-primary  h-auto ">
    <Container>
      <div className="px-4 py-0  max-w-7xl h-full sm:px-6 lg:px-8    mx-auto ">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"> 
        <div  className='bg-primary h-full flex items-center justify-center' >
          <Image  width={350} height={250} alt='product image'  src={product.images?.[0].url} />
        </div>

            
      
          <div className="mt-10  px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
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