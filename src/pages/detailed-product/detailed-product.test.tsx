import { setup } from '../../setup'
import { DetailedProduct } from './detailed-product'

it('should render specific message when no item is found', () => {
  const { render } = setup()

  render(<DetailedProduct />)
})

it('should render item info when item is found', () => {
  const { render } = setup()
  render(<DetailedProduct />)
})
