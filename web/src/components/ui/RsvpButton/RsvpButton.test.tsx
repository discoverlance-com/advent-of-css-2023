import { render, screen } from '@redwoodjs/testing/web'

import { RsvpButton } from './RsvpButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RsvpButton', () => {
  it('renders successfully', () => {
    expect(() => {
      const text = "Yes, I'll be there"
      render(<RsvpButton icon="thumbsup" color="success" text={text} />)

      expect(screen.getByText(text)).toBeInTheDocument()
    }).not.toThrow()
  })
})
