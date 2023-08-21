import { getProductsByQuery } from '../services/get-products-by-query'

export const getProducts = async (req, res) => {
  const query = req.query.q

  try {
    const products = await getProductsByQuery(query)

    res.json(products)
  } catch (error) {
    res.status(404).json({
      error: 'Products not found'
    })
  }
}
