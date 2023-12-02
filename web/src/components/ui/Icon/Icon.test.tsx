import { render, screen } from '@redwoodjs/testing/web'

import { Icon } from './Icon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Icon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Icon icon="calendar" />)
    }).not.toThrow()
  })

  it('renders different size', () => {
    expect(() => {
      render(<Icon icon="logout" size={100} />)

      expect(screen.getByRole('img')).toHaveAttribute('width', '100')
    }).not.toThrow()
  })
})
