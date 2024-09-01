import { ProductData } from '@/lib/types';
import Image from 'next/image';
import React, { useState } from 'react';

const ProductImageGallery : React.FC<ProductData> = (props) => {
  const images = [
    '/assets/images/image_gallery.svg',
    '/assets/images/image_gallery.svg',
    '/assets/images/image_gallery.svg',
    '/assets/images/image_gallery.svg',
    '/assets/images/image_gallery1.svg',
  ];

  const {id, product, reviews, relatedProducts, title} = props

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleSelect = (image: any)=>{
    console.log('selected image', selectedImage);
    setSelectedImage(image)
  }

  console.log(selectedImage)

  return (
    <div className="flex flex-col items-center  w-full">
      {/* Main Image */}
      <div className="w-full max-w-xl h-[32rem] bg-gray-200 flex items-center justify-center mb-3">
        <Image
          width={1000}
          height={1000}
          src={selectedImage.src}
          alt="Product"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Thumbnails */}
     
      <div className="flex gap-2 items-center">
        {product?.images.map((image, idx) => (
          <div
            key={idx}
            className={`relative w-20 h-20 bg-gray-200 cursor-pointer border-2 ${
              selectedImage.src === image.src ? 'border-green-600' : 'border-transparent'
            }`}
            onClick={() => handleSelect(image)}
          >
            <Image
              width={60}
              height={60}
              src={image.src}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Light overlay on unselected thumbnails */}
            {selectedImage !== image && (
              <div className="absolute inset-0 bg-white opacity-50"></div>
            )}
          </div>
        ))}
      </div>
      </div>
   
  );
};

export default ProductImageGallery;
