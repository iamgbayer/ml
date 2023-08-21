import faker from '@faker-js/faker'
import { screen } from '@testing-library/react'
import { mockProduct } from '../../../mocks/product'
import { setup } from '../../../setup'
import { Item } from './item'

test('should not render free shipping icon when item does not have free shipping', () => {
  // Arrange
  const { render } = setup()
  const item = mockProduct({ free_shipping: false })

  // Act
  render(<Item item={item} />)

  // Assert
  expect(screen.queryByTestId('item-free-shipping')).not.toBeInTheDocument()
})

test('should render free shipping icon when item has free shipping', () => {
  // Arrange
  const { render } = setup()
  const item = mockProduct({ free_shipping: true })

  // Act
  render(<Item item={item} />)

  // Assert
  expect(screen.getByTestId('item-free-shipping')).toBeInTheDocument()
})

test('should render item title', () => {
  // Arrange
  const { render } = setup()
  const item = mockProduct({ title: 'Item title' })

  // Act
  render(<Item item={item} />)

  // Assert
  expect(screen.getByTestId('item-title')).toHaveTextContent('Item title')
})

test('should redirect to item details page when item is clicked', () => {
  // Arrange
  const { render, history } = setup()
  const id = faker.datatype.uuid()
  const item = mockProduct({ id })

  // Act
  render(<Item item={item} />)
  screen.getByTestId('item').click()

  // Assert
  expect(history.location.pathname).toBe(`/items/${id}`)
})
