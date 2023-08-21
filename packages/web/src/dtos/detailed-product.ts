import { Condition } from './condition'

export interface DetailedProduct {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  condition: Condition
  free_shipping: boolean
  sold_quantity: number
  description: string
}
