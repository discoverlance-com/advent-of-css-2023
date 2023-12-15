import { render } from '@redwoodjs/testing/web'

import InteriorPageLayout from './InteriorPageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InteriorPageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InteriorPageLayout />)
    }).not.toThrow()
  })
})
