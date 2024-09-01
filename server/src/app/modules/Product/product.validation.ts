import { z } from 'zod'

const productValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    // description: z.string(),
    quantity: z.number(),
    cost: z.number(),
    // sizesAvailable : z.array(z.string()),
    // colorsAvailable : z.array(z.string()),
    // stylesAvailableSchema : z.array(z.string()),
    categoryName: z.string(),
    // deliveryMode: z.string(),
  }),
})

export const ProductValidation = {
  productValidationSchema,
}
