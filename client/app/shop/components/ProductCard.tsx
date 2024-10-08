'use client'

import { ProductData } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FaShoppingCart, FaHeart, FaCreditCard } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductData> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const {product, id} = props

  const router = useRouter()

  return (
    <div
      className="relative border border-gray-300 rounded-lg h-full w-full max-w-80 max-h-96 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Image src={product.image} alt={product.name} className="w-full h-60 object-cover" width={400} height={400} />

      {/* Product Details */}
      <div className="p-4 mt-2">
        <h3 className="text-sm text-gray-500">Crepe</h3>
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-1">{product.price}</p>
      </div>

      {/* Overlay with Actions */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center  gap-4 justify-center transition-opacity duration-300">
          
          <Actions className='h-10 w-10 px-0 py-0 flex items-center justify-center' handleClick={()=>console.log('hey')}>
          <BsCart3 size={24}/>
          </Actions>
          <Actions handleClick={()=>router.push(`shop/${id}`)}>
          Buy Now
          </Actions>
          <Actions className='h-10 w-10 px-0 py-0 flex items-center justify-center' handleClick={()=>console.log('hey')}>
          <FiHeart size={24} />
          </Actions>
          
        </div>
      )}
    </div>
  );
};

export default ProductCard;


const Actions = ({children, handleClick, className}: {children: React.ReactNode, handleClick?: ()=>void, className?: string})=> {
 return(
  <button onClick={handleClick} className={cn("flex items-center bg-white text-gray-800 rounded-full px-4 py-2 shadow-md hover:bg-gray-100", className)}>
          {children}
          </button>
 )
}






