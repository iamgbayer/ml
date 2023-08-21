import { useQuery } from 'react-query'
import { GetDetailedProductOutput } from '../dtos/get-detailed-product-output'
import { getItem } from '../services/get-item'

export const useGetItem = (id: string) => {
  return useQuery<GetDetailedProductOutput, Error>(
    ['item', id],
    () => getItem(id),
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )
}
