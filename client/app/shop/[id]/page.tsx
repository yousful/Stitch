'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import React from 'react';
import ProductImageGallery from './components/ProductGallery';
import ProductDetailSidebar from './components/ProductDescription';
import ProductReviews from './components/ProductReview';
import ProductCard from '../components/ProductCard';
import { poducts, product } from '@/lib/constants';
import useFetchData from '@/hooks/useFetchData';
import { ProductData } from '@/lib/types';
import { getProductById } from '@/actions/productAction';

const ProductDetailPage = ({params}: {params:{ id: string | number}}) => {
    const { data: product, loading, error, refetch } = useFetchData<ProductData>(getProductById, params.id);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Product not found</div>;
  
    console.log(params.id)
  return (
    <div className="p-5 w-full max-w-[1440px] mx-auto">
      {/* Header Section */}
      <div className="mb-5">
        {/* Breadcrumb navigation using Shadcn */}
        <Breadcrumb className='flex items-center gap-2'>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <Slash size={12}/>
          
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          
          <Slash size={12}/>
          <BreadcrumbItem aria-current="page">
            <BreadcrumbLink href="/shop/womens-dresses">Women&apos;s Dresses</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        {/* Product Image Section */}
        <div className='flex-1'>

         <ProductImageGallery {...product}/>
        </div>

        {/* Product Details Section */}
        <div className='flex-1'>

        <ProductDetailSidebar {...product}/>
        </div>

      </div>

      {/* Tabs Section */}
      <div className="mt-10 border-b">
        {/* <button className="px-4 py-2 border-b-2 border-green-600">Description</button> */}
        <button className="px-4 py-2 border-b-2 border-green-600 text-gray-500">Reviews</button>
      </div>

      {/* Reviews Section */}
      <ProductReviews {...product}/>

      {/* Related Products Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Related Wears</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {/* Related product cards */}
          {poducts.slice(0, 5).map((item, idx)=><ProductCard key={idx}
							
                            {...item}
						/>)}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
