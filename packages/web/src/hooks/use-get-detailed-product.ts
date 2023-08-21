import { useQuery } from 'react-query'
import { GetDetailedProductOutput } from '../dtos/get-detailed-product-output'
import { GetDetailedProduct } from '../services/get-detailed-product'

export const useGetDetailedProduct = (id: string) => {
  return useQuery<GetDetailedProductOutput, Error>(
    ['detailed-product', id],
    () => new GetDetailedProduct().execute(id),
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )
}
