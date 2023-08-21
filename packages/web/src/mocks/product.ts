import merge from 'deepmerge'
import { PartialDeep } from 'type-fest'
import { Product } from '../dtos/product'

export const mockProduct = (data: PartialDeep<Product> = {}): Product =>
  merge<Product, PartialDeep<Product>>(
    {
      id: 'MLB123',
      title: 'Item title',
      price: {
        currency: 'BRL',
        amount: 123,
        decimals: 2
      },
      picture: 'http://localhost:4000/image.png',
      free_shipping: true,
      condition: 'new'
    },
    data
  )
