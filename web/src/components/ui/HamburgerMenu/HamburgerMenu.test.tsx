import { render } from '@redwoodjs/testing/web'

import { HamburgerMenu } from './HamburgerMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HamburgerMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HamburgerMenu />)
    }).not.toThrow()
  })
})
