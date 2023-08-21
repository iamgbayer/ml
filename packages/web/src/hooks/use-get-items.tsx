import { useQuery } from 'react-query'
import { GetProductsOutput } from '../dtos/get-products-output'
import { GetItems } from '../services/get-items'
import { useGetParams } from './use-get-params'

export const useGetItems = () => {
  const params = useGetParams()

  const query = params['q']

  return useQuery<GetProductsOutput, Error>(
    'get-items',
    () => new GetItems().execute(query),
    {
      enabled: false,
      retry: false,
      refetchOnWindowFocus: false
    }
  )
}
