import axios, { AxiosError } from 'axios'
import { GetProductsOutput } from '../dtos/get-products-output'

export class GetItems {
  public async execute(text: string): Promise<GetProductsOutput> {
    try {
      const response = await axios.get<GetProductsOutput>(
        `${process.env['REACT_APP_API_URL']}/items?q=${text}`
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
}
