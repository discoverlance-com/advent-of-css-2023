import { render } from '@redwoodjs/testing/web'

import { InviteCard } from './InviteCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InviteCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <InviteCard
          indicator="error"
          username="John Doe"
          image="/avatars/avatar-03.png"
          email="john@example.com"
        />
      )
    }).not.toThrow()
  })
})
