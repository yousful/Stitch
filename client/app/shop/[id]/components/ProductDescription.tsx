import { Button } from "@/components/ui/button";
import { ProductData } from "@/lib/types";
import { Key } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
// Importing Shadcn Button

const ProductDetailSidebar: React.FC<ProductData> = (props) => {

    const {id, product, reviews, relatedProducts, title} = props
	return (
		<div className="flex flex-col p-5 s gap-6  max- h-full">
			{/* Product Title and Pricing */}
			<div className="space-y-4">
				<p className="text-sm text-text font-semibold">{title}</p>
				<h1 className="text-2xl font-normal text-text-100 ">
					Multi-colored flared gown
				</h1>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-9">
						<span className="text-text line-through">{product.price}</span>
						<span className="text-2xl font-bold text-text-100">₦28,000</span>
					</div>
					<div className="flex items-center gap-4">
						<span className="text-sm text-text">{product.sold}</span>
						<div className="flex items-center gap-2">
							<FaStar className="text-yellow-500 text-xl" />
							<span className="text-lg font-semibold">{product.rating}</span>
						</div>
					</div>
				</div>
			</div>

			{/* Description */}
			<div className="flex flex-col gap-3 ">
				<p className="text-2xl font-semibold text-text-100">Description</p>
				<p className="text-text">
					{product.description}
				</p>
			</div>

			{/* Color Options */}
			<div className="">
				<p className="text-sm font-medium text-gray-700">Color: Multi-color</p>
				<div className="flex space-x-2 mt-1">
					{product.colorOptions.map((color, idx)=><span key={idx} style={{background: color}} className="w-6 h-6 bg-green-500 rounded-full border-2 border-gray-200 cursor-pointer"></span>)}
					
				</div>
			</div>

			{/* Chat Button */}
			<div className="w-1/2">
				<Button
					variant="outline"
					className="w-full border-2 rounded-3xl border-primary"
				>
					Chat with Store owner
				</Button>
			</div>

			{/* Size Options */}
			<div className="space-y-2">
                <div className="flex items-center justify-between">

				<p className="text-sm font-medium text-gray-700">Size: 8</p>
                <div className="flex space-x-8 text-sm">
					<Link
						href="#"
						className="text-green-600 underline"
					>
						Request Measurement
					</Link>
					<Link
						href="#"
						className="text-green-600 underline"
					>
						View Size Chart
					</Link>
				</div>
                </div>
				<div className="flex space-x-2">
					{product.sizes.map((size, idx)=><button key={idx} className="px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
						{size}
					</button>)}
					
				</div>
				
			</div>

			{/* Add to Cart and Checkout Buttons */}
			<div className="flex w-4/5 gap-10 ">
				<Button className="bg-primary text-white hover:bg-primary rounded-3xl w-full">
					Add To Cart
				</Button>
				<Button className="bg-accent text-primary rounded-3xl border-primary border w-full">
					Check Out Now
				</Button>
			</div>
		</div>
	);
};

export default ProductDetailSidebar;
