import { render } from '@redwoodjs/testing/web'

import Indicator from './Indicator'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Indicator', () => {
  it('renders successfully', () => {
    expect(() => {
      const { getByRole } = render(<Indicator />)
      expect(getByRole('img')).toHaveAttribute('data-icon', 'check')
    }).not.toThrow()
  })

  it('renders warning', () => {
    expect(() => {
      const { getByRole } = render(<Indicator type="warning" />)

      expect(getByRole('img')).toHaveAttribute('data-icon', 'question')
    }).not.toThrow()
  })

  it('renders error', () => {
    expect(() => {
      const { getByRole } = render(<Indicator type="error" />)

      expect(getByRole('img')).toHaveAttribute('data-icon', 'minus')
    }).not.toThrow()
  })
})
