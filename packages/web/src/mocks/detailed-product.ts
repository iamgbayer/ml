import merge from 'deepmerge'
import { PartialDeep } from 'type-fest'
import { DetailedProduct } from '../dtos/detailed-product'

export const mockDetailedProduct = (
  data: PartialDeep<DetailedProduct> = {}
): DetailedProduct =>
  merge<DetailedProduct, PartialDeep<DetailedProduct>>(
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
      condition: 'new',
      sold_quantity: 10,
      description: 'Item description'
    },
    data
  )
