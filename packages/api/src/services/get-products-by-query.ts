import axios from 'axios'

type GetProductsByQueryResponse = {
  results: Array<{
    id: string
    title: string
    price: number
    currency_id: string
    thumbnail: string
    condition: string
    shipping: {
      free_shipping: boolean
    }
  }>
  filters: Array<{
    id: string
    values: Array<{
      path_from_root: Array<{
        name: string
      }>
    }>
  }>
}

export const getProductsByQuery = async (query) => {
  return axios
    .get<GetProductsByQueryResponse>(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    )
    .then((response) => getResponse(response.data))
}

const getResponse = (data: GetProductsByQueryResponse) => {
  return {
    items: getItems(data.results).slice(0, 4),
    categories: getCategories(data.filters)
  }
}

const getItems = (results) => {
  return results.map((result) => ({
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: result.price,
      decimals: 0
    },
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result.shipping.free_shipping
  }))
}

const getCategories = (filters) => {
  const categories = filters.find((filter) => filter.id === 'category')

  return categories.values[0].path_from_root.map((category) => category.name)
}
