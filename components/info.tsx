"use client";

import { ShoppingCart } from "lucide-react";


import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import { useState } from "react";


interface InfoProps {
  data: Product

};

const Info: React.FC<InfoProps> = ({ data }) => {
 
  const cart = useCart();
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

const handleAddToCart = () => {
    cart.addItem(data, quantity);
    // Reset quantity after adding to cart
    setQuantity(1);
};


  return ( 
    <div  className="bg-primary px-10  py-20 rounded-xl" >
        <h3  className="text-lg pb-4 font-medium text-yellow-500" >{data.category.name}</h3>
      <h1 className="md:text-3xl text-xl  font-bold text-white pb-4 ">{data.name}</h1>
      <p  className="text-md  text-white    hidden  md:block  " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque quam sequi labore atque porro, quos assumenda nesciunt rerum tempora a molestiae numquam harum aperiam explicabo repudiandae nobis, et ex?</p> 
        
      <div className="mt-3 flex  w-auto  ">
     <p className="md:text-3xl text-2xl  font-bold mt-2  text-yellow-500 ">
         ${data?.price} 
        </p>
        <div  className="flex  md:flex-row  flex-col   bg-yellow-500  text-black rounded-xl md:px-5 px-2 mx-5  py-3 gap-x-5">
        <button   onClick={handleAddToCart}  className="flex items-center cursor-pointer ">
          Add To Cart
          <ShoppingCart size={20} />
        </button>
      </div>
      </div>

    
   
     
    </div>
  );
}
 
export default Info;