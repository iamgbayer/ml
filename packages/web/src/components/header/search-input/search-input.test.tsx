import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GetItems } from '../../../services/get-items'
import { setup } from '../../../setup'
import { SearchInput } from './search-input'

it('should fetch items when submitting search', async () => {
  const getItems = GetItems.prototype

  jest.spyOn(getItems, 'execute').mockResolvedValueOnce({
    items: [],
    categories: []
  })

  const { render } = setup()

  render(<SearchInput />)

  fireEvent.change(screen.getByTestId('search-input'), {
    target: { value: 'iphone' }
  })

  expect(await screen.findByTestId('search-input')).toHaveValue('iphone')

  userEvent.click(screen.getByTestId('search-button'))

  await waitFor(() => {
    expect(getItems.execute).toHaveBeenCalledWith('iphone')
  })
})
