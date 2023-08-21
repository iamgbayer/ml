import axios, { AxiosError } from 'axios'
import { GetProductsOutput } from '../dtos/get-products-output'

export const getItems = async (text: string): Promise<GetProductsOutput> => {
  try {
    const response = await axios.get<GetProductsOutput>(
      `http://localhost:4000/api/items?q=${text}`
    )

    return response.data
  } catch (error: unknown) {
    const isAxiosError = error instanceof AxiosError

    if (isAxiosError) {
      throw new Error('Nenhum produto encontrado')
    }

    throw error
  }
}
