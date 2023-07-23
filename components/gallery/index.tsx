import { Image } from "@/types";
import NextImage from "next/image";
interface GalleryProps {
    images: Image[];
  }


const Gallery: React.FC<GalleryProps> = ({
    images = []
  }) => {


return (
    <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <NextImage
                fill
            
                alt="Image"
                className="object-cover object-center"
              />

        </div>
)



  }
  export default Gallery;