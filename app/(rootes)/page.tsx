import getProducts from '@/actions/get-products'
import FeaturedBanner from '@/components/FeaturedBanner'
import Container from '@/components/ui/container'
import Hero from '../../components/Hero'

export const revalidate=0;
 const    Home =  async () => {

  const products = await getProducts({isFeatured:true})
  
  return (

    <Container>
      <div  className=' pb-10 mx-auto h-full    ' >   
         <Hero/>

       
          <FeaturedBanner   items={products} />
         </div>
         
    
 
    

  

     </Container>
  )
}
export default Home