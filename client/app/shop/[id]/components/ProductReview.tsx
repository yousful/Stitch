import { ProductData } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import CircularRating from "./CircularRating";

const ProductReviews: React.FC<ProductData> = (props) => {
	const { id, product, reviews, relatedProducts, title } = props;

	const totalReviews = Object.values(reviews.ratingBreakdown).reduce(
		(sum, count) => sum + count,
		0
	);

	const ratingBreakdownArray = Object.entries(reviews.ratingBreakdown).map(
		([rating, count]) => ({
			rating: Number(rating),
			count,
		})
	);

	return (
		<div className="mt-5">
			<h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>
			<div className="flex items-center gap-20 mb-4">
				<div className="flex items-center mb-4">
					{/* Circular Rating Display */}
					<div className="relative w-40 h-40 flex items-center justify-center mr-4">
						{/* <svg
							className="absolute inset-0 w-full h-full text-yellow-500 "
							viewBox="0 0 36 36"
						>
							<path
								className="stroke-current"
								d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
								fill="none"
								strokeWidth="4"
							/>
						</svg>
						<svg
							className="absolute inset-0 w-full h-full text-text"
							viewBox="0 0 36 36"
						>
							<path
								className="stroke-current"
								d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831"
								fill="none"
								strokeWidth="4"
								strokeDasharray="80, 100"
							/>
						</svg> */}
						<CircularRating maxValue={5}  value={reviews.averageRating}/>
						
					</div>

					{/* Star Rating and Review Count */}
					<div>
						<div className="flex items-center">
							{Array.from({ length: 5 }, (_, i) => (
								<FaStar
									key={i}
									className={`h-4 w-4 ${
										i < 4 ? "text-yellow-500" : "text-text"
									}`}
								/>
							))}
						</div>
						<p className="text-gray-600 mt-1">
							{`from ${reviews.totalReviews} reviews`}
						</p>
					</div>
				</div>
				<div className="flex-1">
					<div>
						{ratingBreakdownArray.map((item, idx) => {
							const percentage = (item.count / totalReviews) * 100; // Calculate percentage based on total reviews
							return (
								<div
									key={idx}
									className="flex items-center mb-2"
								>
									<span className="text-sm text-gray-600 w-8">
										{item.rating}
									</span>
									<div className="flex-1 h-3 bg-gray-200 mx-2 rounded-full">
										<div
											className="h-3 bg-primary rounded-full"
											style={{ width: `${percentage}%` }} // Use calculated percentage for width
										></div>
									</div>
									<span className="text-sm text-gray-600 w-10 text-right">
										{item.count}
									</span>
								</div>
							);
						}).reverse()}
					</div>
				</div>
			</div>
			<div className="mt-5">
				<div className="flex gap-4 mb-4">
					<button className="py-2 px-4 bg-gray-200 rounded-full text-sm font-medium">
						All Reviews
					</button>
					{/* <button className="py-2 px-4 bg-gray-200 rounded-full text-sm font-medium">
						With Photo & Video
					</button>
					<button className="py-2 px-4 bg-gray-200 rounded-full text-sm font-medium">
						With Description
					</button> */}
				</div>
				<div className="border-t border-gray-200 pt-4">
					{reviews.reviewList.map((review, idx)=>(<div key={idx} className="mb-4 flex  gap-2 flex-col">
						<div className="flex items-center">
							<div className="flex items-center">
								{Array.from({ length: 5 }, (_, i) => (
									<FaStar
										key={i}
										className={`h-4 w-4 ${
											i < review.rating ? "text-yellow-500" : "text-text"
										}`}
									/>
								))}
							</div>
						</div>
						<p className="text-gray-500 font-normal">{review.content}</p>
						<p className=" text-sm mt-1 text-text font-medium">July 2, 2024</p>
						<div className="flex items-center mt-2">
							<Image
								src="/assets/images/review_image.svg"
								alt="Avatar"
								className="w-8 h-8 rounded-full"
								width={10}
								height={10}
							/>
							<span className="ml-4 text-sm text-gray-500">{review.author}</span>
						</div>
					</div>))}
					
				</div>
				<div className="flex justify-center mt-6">
					<button className="px-4 py-2 border rounded-md">1</button>
					<button className="px-4 py-2 border rounded-md mx-2">2</button>
					<span className="px-4 py-2 border rounded-md">...</span>
					<button className="px-4 py-2 border rounded-md">19</button>
				</div>
			</div>
		</div>
	);
};

export default ProductReviews;
