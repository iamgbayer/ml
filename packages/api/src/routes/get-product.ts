import { getProductById } from '../services/get-product-by-id'

export const getProduct = async (req, res) => {
  const id = req.params.id

  try {
    const product = await getProductById(id)

    res.json(product)
  } catch (error) {
    res.status(404).json({
      error: 'Product not found'
    })
  }
}
