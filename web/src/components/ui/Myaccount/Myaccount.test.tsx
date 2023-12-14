import { render, screen } from '@redwoodjs/testing/web'

import { Myaccount } from './Myaccount'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Myaccount', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Myaccount username="Example" image="/avatars/avatar-02.png" />)

      expect(screen.getByRole('img', { name: 'Example' })).toBeInTheDocument()
    }).not.toThrow()
  })
})
