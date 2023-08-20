import { Condition } from './condition'

export interface Product {
  id: string
  title: string
  condition: Condition
  free_shipping: boolean
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
}
