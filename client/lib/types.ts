import { CustomInputProps } from '@/components/forminputs/CustomInput';
import { CustomSelectInputProps } from '@/components/forminputs/CustomSelectInput';
import { CustomTextAreaProps } from '@/components/forminputs/CustomTextArea';
import { Control, FieldValues, FieldError, RegisterOptions } from 'react-hook-form';



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


  

  export type FormBuilderProps = 
  | ({ type: 'input'; } & CustomInputProps & CommonProps)
  | ({ type: 'select'; } & CustomSelectInputProps & CommonProps)
  | ({ type: 'textarea'; } & CustomTextAreaProps & CommonProps);

interface CommonProps {
  control?: Control<FieldValues>; // The control object from react-hook-form
  name: string; // The name of the field
  rules?: RegisterOptions; // Validation rules
  error?: FieldError | undefined; // Error object for the field
}







export type FormField = 
  | {
      type: 'input';
      name: string;
      label: string;
      placeholder?: string;
      control: Control<FieldValues>;
      rules?: { required: string; maxLength?: number };
      error?: FieldError;
    }
  | {
      type: 'select';
      name: string;
      label: string;
      placeholder?: string;
      options: { value: string; label: string }[];
      control: Control<FieldValues>;
      rules?: { required: string };
      error?: FieldError;
    }
  | {
      type: 'textarea';
      name: string;
      label: string;
      placeholder?: string;
      control: Control<FieldValues>;
      rules?: { required: string; maxLength?: number };
      error?: FieldError;
    };




  