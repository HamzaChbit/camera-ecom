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
    <div  className="bg-primary px-10  py-20" >
        <h3  className="text-xl pb-4 font-medium text-yellow-500" >{data.category.name}</h3>
      <h1 className="text-3xl font-bold text-white pb-4 ">{data.name}</h1>
      <p  className="text-md  text-white    hidden  md:block  " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque quam sequi labore atque porro, quos assumenda nesciunt rerum tempora a molestiae numquam harum aperiam explicabo repudiandae nobis, et ex?</p>
      <div className="mt-5 flex   items-center">
        <p className="text-3xl font-bold  text-yellow-500 ">
         ${data?.price} 
        </p>
        <div  className="flex  md:flex-row  flex-col  md:mx-12 mx-2 bg-yellow-500  text-black rounded-xl px-5 py-3 gap-x-5">
        <button   onClick={handleAddToCart}   className="flex items-center cursor-pointer gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </button>
      </div>
      </div>

    
   
     
    </div>
  );
}
 
export default Info;