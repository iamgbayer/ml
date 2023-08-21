import { screen } from '@testing-library/react'
import { mockDetailedProduct } from '../../mocks/detailed-product'
import { GetDetailedProduct } from '../../services/get-detailed-product'
import { setup } from '../../setup'
import { DetailedProduct } from './detailed-product'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 'MLB123' })
}))

it('should render specific message when no item is found', async () => {
  const getDetailedProduct = GetDetailedProduct.prototype

  const notFoundText = 'Produto não encontrado'

  jest
    .spyOn(getDetailedProduct, 'execute')
    .mockRejectedValue(new Error(notFoundText))

  const { render } = setup()

  render(<DetailedProduct />)

  expect(await screen.findByText(notFoundText)).toBeInTheDocument()
})

it('should render item info correctly when there is a item', async () => {
  // Arrange
  const getDetailedProduct = GetDetailedProduct.prototype

  const item = mockDetailedProduct()

  jest.spyOn(getDetailedProduct, 'execute').mockResolvedValue({
    item
  })

  const { render } = setup()

  // Act
  render(<DetailedProduct />)

  // Assert
  expect(await screen.findByTestId('detailed-product-title')).toHaveTextContent(
    item.title
  )
  expect(screen.getByTestId('detailed-product-price')).toHaveTextContent(
    `$ ${item.price.amount}`
  )
})

it('should render correct condition when item is new', async () => {
  // Arrange
  const getDetailedProduct = GetDetailedProduct.prototype

  const item = mockDetailedProduct({
    condition: 'new'
  })

  jest.spyOn(getDetailedProduct, 'execute').mockResolvedValue({
    item
  })

  const { render } = setup()

  // Act
  render(<DetailedProduct />)

  // Assert
  expect(
    await screen.findByTestId('detailed-product-condition')
  ).toHaveTextContent('Nuevo')
})

it('should render correct condition when item is used', async () => {
  // Arrange
  const getDetailedProduct = GetDetailedProduct.prototype

  const item = mockDetailedProduct({
    condition: 'used'
  })

  jest.spyOn(getDetailedProduct, 'execute').mockResolvedValue({
    item
  })

  const { render } = setup()

  // Act
  render(<DetailedProduct />)

  // Assert
  expect(
    await screen.findByTestId('detailed-product-condition')
  ).toHaveTextContent('Usado')
})
