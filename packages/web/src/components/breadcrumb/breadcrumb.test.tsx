import { render, screen } from '@testing-library/react'
import { Breadcrumb } from './breadcrumb'

test('renders breadcrumb with categories', () => {
  const categories = ['Home', 'Products', 'Electronics', 'Smartphones']
  render(<Breadcrumb categories={categories} />)

  categories.forEach((category) => {
    expect(screen.getByText(category)).toBeInTheDocument()
  })
})

test('renders correct number of separators', () => {
  // Arrange
  const categories = ['Home', 'Products', 'Electronics', 'Smartphones']

  // Act
  render(<Breadcrumb categories={categories} />)

  // Assert
  const separatorCount = categories.length - 1
  expect(screen.getAllByTestId('separator')).toHaveLength(separatorCount)
})
