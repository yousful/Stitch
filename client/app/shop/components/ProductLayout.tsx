"use client";
import React from "react";
import FilterSection from "./FilterSection";
import { filterItems, poducts, product } from "@/lib/constants";
import RatingFilterSection from "./StarRating";
import RangeFilterSection from "./RangeFilter";
import ProductCard from "./ProductCard";
import SearchInput from "@/components/forminputs/SearchInput";
import { Button } from "@/components/ui/button";
import Dropdown from "@/components/forminputs/DropDownButton";
import { CustomPagination } from "@/components/CustomPagination";

function ProductLayout() {
	const handleOptionSelect = (option: string) => {
		console.log("Selected option:", option);
	};

	return (
		<section className="w-full h-full justify-center my-10">
			<div className="max-w-[1440px] w-full grid grid-cols-8 gap-10   mx-auto">
				{/* Filter section */}
				<div className="col-span-2 h-full  w-full px-4 flex flex-col gap-6 pt-4">
					<div className="flex justify-between items-center w-full">
						<p className="font-bold text-primary">Filter</p>

						<Button className="bg-accent rounded-full text-primary font-semibold px-6">
							Clear
						</Button>
					</div>

					<div className="border border-gray-400 rounded-lg p-4 mt-4">
						<FilterSection
							title="Category"
							options={filterItems["Category"]}
						/>
						<FilterSection
							title="Brand"
							options={filterItems["Brand"]}
						/>
						<RatingFilterSection
							title="Rating"
							options={filterItems["Rating"]}
						/>
						<FilterSection
							title="Cloth"
							options={filterItems["Clothing"]}
						/>
						<RangeFilterSection
							title="Price"
							min={0}
							max={500}
							unit="$"
						/>
						<RangeFilterSection
							title="Size"
							min={0}
							max={200}
						/>
					</div>
				</div>

				{/* Product section */}
				<aside className="flex flex-col w-full gap-4 col-span-6 h-full overflow-x-hidden min-h-screen overflow-y-scroll">
					<div className="flex justify-between items-center">
						<div className="min-w-1/4 w-full">
							<SearchInput placeholder="search" />
						</div>
						<div className="p-4">
							<Dropdown
								options={[
									"Popularity",
									"Price: Low to High",
									"Price: High to Low",
								]}
								onOptionSelect={handleOptionSelect}
							/>
						</div>
					</div>
					<div className="col-span-6 grid gap-10 h-full w-full px-4  ">
						<div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
							{poducts.map((item, idx) => (
								<ProductCard
									key={idx}
									
									{...item}
								/>
							))}
						</div>
						<div className="place-self-end align-baseline">
							<CustomPagination />
						</div>
					</div>
				</aside>
			</div>
		</section>
	);
}

export default ProductLayout;
