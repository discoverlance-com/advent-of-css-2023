import { render } from '@redwoodjs/testing/web'

import { NavigationPane } from './NavigationPane'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavigationPane', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationPane />)
    }).not.toThrow()
  })
})
