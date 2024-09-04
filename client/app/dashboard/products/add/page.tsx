'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type AddProductFormValues = {
  productName: string;
  productDescription: string;
  productPrice: string;
  productCategory: string;
  productStock: string;
  productSKU: string;
  productImage: FileList;
};

export default function AddProductPage() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<AddProductFormValues>();
  const router = useRouter();

  const onSubmit = async (data: AddProductFormValues) => {
    console.log('Product added:', data);

    // Handle file upload and form submission

    // After adding, navigate back to the products page
    router.push('/products');
  };

  return (
    <div className="container mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-semibold mb-8">Add New Product</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Product Details Section */}
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="productName">Product Name</Label>
              <Input
                id="productName"
                placeholder="Enter product name"
                {...register('productName', { required: 'Product name is required' })}
              />
              {errors.productName && <p className="text-red-600">{errors.productName.message}</p>}
            </div>

            <div>
              <Label htmlFor="productDescription">Product Description</Label>
              <Textarea
                id="productDescription"
                placeholder="Enter product description"
                {...register('productDescription', { required: 'Product description is required' })}
              />
              {errors.productDescription && <p className="text-red-600">{errors.productDescription.message}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Pricing Section */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="productPrice">Product Price</Label>
              <Input
                id="productPrice"
                type="number"
                placeholder="Enter product price"
                {...register('productPrice', { required: 'Product price is required' })}
              />
              {errors.productPrice && <p className="text-red-600">{errors.productPrice.message}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Category Section */}
        <Card>
          <CardHeader>
            <CardTitle>Category</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="productCategory">Product Category</Label>
              <Select onValueChange={(value) => setValue('productCategory', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dresses">Dresses</SelectItem>
                  <SelectItem value="tops">Tops</SelectItem>
                  <SelectItem value="pants">Pants</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="outerwear">Outerwear</SelectItem>
                </SelectContent>
              </Select>
              {errors.productCategory && <p className="text-red-600">{errors.productCategory.message}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Stock Information Section */}
        <Card>
          <CardHeader>
            <CardTitle>Stock Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="productStock">Product Stock</Label>
              <Input
                id="productStock"
                type="number"
                placeholder="Enter stock quantity"
                {...register('productStock', { required: 'Product stock is required' })}
              />
              {errors.productStock && <p className="text-red-600">{errors.productStock.message}</p>}
            </div>

            <div>
              <Label htmlFor="productSKU">Product SKU</Label>
              <Input
                id="productSKU"
                placeholder="Enter SKU"
                {...register('productSKU', { required: 'Product SKU is required' })}
              />
              {errors.productSKU && <p className="text-red-600">{errors.productSKU.message}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Upload Image Section */}
        <Card>
          <CardHeader>
            <CardTitle>Upload Image</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="productImage">Product Image</Label>
              <Input
                id="productImage"
                type="file"
                {...register('productImage', { required: 'Product image is required' })}
                accept="image/*"
              />
              {errors.productImage && <p className="text-red-600">{errors.productImage.message}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Add Product
        </Button>
      </form>
    </div>
  );
}
