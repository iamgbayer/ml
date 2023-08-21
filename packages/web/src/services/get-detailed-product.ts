import axios, { AxiosError } from 'axios'
import { GetDetailedProductOutput } from '../dtos/get-detailed-product-output'

export class GetDetailedProduct {
  public async execute(id: string): Promise<GetDetailedProductOutput> {
    try {
      const response = await axios.get<GetDetailedProductOutput>(
        `http://localhost:4000/api/items/${id}`
      )

      return response.data
    } catch (error: unknown) {
      const isAxiosError = error instanceof AxiosError

      if (isAxiosError) {
        throw new Error('Produto não encontrado')
      }

      throw error
    }
  }
}
