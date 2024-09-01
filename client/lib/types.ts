// Types for the product structure
interface ProductImage {
    src: string;
    alt: string;
  }
  
  interface ProductOption {
    label: string;
    link: string;
  }
  
  interface Product {
    name: string;
    price: string;
    image: string;
    sold: string;
    rating: number;
    description: string;
    colorOptions: string[];
    sizes: string[];
    additionalOptions: ProductOption[];
    images: ProductImage[];
  }
  
  // Types for the reviews structure
  interface RatingBreakdown {
    [key: string]: number;
  }
  
  interface Review {
    rating: number;
    title: string;
    date: string;
    author: string;
    content: string;
  }
  
  interface Reviews {
    averageRating: number;
    totalReviews: number;
    ratingBreakdown: RatingBreakdown;
    reviewList: Review[];
    filterOptions: string[];
  }
  
  // Types for related products
  interface RelatedProduct {
    name: string;
    imageSrc: string;
  }
  
  // Main structure combining everything
  export interface ProductData {
    id: number | string;
    title: string;
    product: Product;
    reviews: Reviews;
    relatedProducts: RelatedProduct[];
  }
  