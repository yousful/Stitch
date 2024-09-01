// data.ts
import { poducts } from '@/lib/constants'; // Assuming products is an array of product objects
import { ProductData } from '@/lib/types';


export const getProductById = (id: string | number): Promise<ProductData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = poducts.find((p) => p.id == Number(id));
      if (product) {
        resolve(product);
      } else {
        reject('Product not found');
      }
    }, 1000); // Simulate a 1-second delay
  });
};
