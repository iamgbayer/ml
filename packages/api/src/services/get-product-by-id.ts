import axios from 'axios'

export const getProductById = async (id: string) => {
  const [response1, response2] = await Promise.all([
    axios.get(`https://api.mercadolibre.com/items/${id}`),
    axios.get(`https://api.mercadolibre.com/items/${id}/description`)
  ])

  if (response1.status !== 200 || response2.status !== 200) {
    throw new Error('Error getting product')
  }

  return getResponse(response1.data, response2.data)
}

const getResponse = (result, description) => {
  return {
    item: getItem(result, description)
  }
}

const getItem = (result, description) => {
  return {
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: result.price,
      decimals: 0
    },
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result.shipping.free_shipping,
    sold_quantity: result.sold_quantity,
    description: description.plain_text
  }
}
