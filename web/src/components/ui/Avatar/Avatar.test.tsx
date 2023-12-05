import { render, screen } from '@redwoodjs/testing/web'

import Avatar from './Avatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Avatar', () => {
  it('renders icon initials', () => {
    expect(() => {
      render(<Avatar variant="initials" name="Lance Armah-Abraham" />)
      expect(screen.getByText('LA')).toBeInTheDocument()
    }).not.toThrow()
  })

  it('renders image avatar', () => {
    expect(() => {
      render(
        <Avatar variant="image" alt="John Doe" src="/avatars/avatar-03.png" />
      )
      expect(screen.getByRole('img', { name: 'John Doe' })).toBeInTheDocument()
    }).not.toThrow()
  })

  it('renders icon avatar', () => {
    expect(() => {
      render(<Avatar variant="icon" icon="plus" />)
      expect(screen.getByRole('img')).toBeInTheDocument()
    }).not.toThrow()
  })

  it('renders image avatar with indicator', () => {
    expect(() => {
      render(
        <Avatar
          variant="image"
          alt="John Doe"
          src="/avatars/avatar-03.png"
          indicator="error"
        />
      )
      expect(screen.getByRole('img', { name: '' })).toHaveAttribute(
        'data-icon',
        'minus'
      )
    }).not.toThrow()
  })

  it('renders icon avatar with santa hat', () => {
    expect(() => {
      render(<Avatar variant="icon" icon="plus" isSanta />)
      expect(screen.getByRole('img', { name: 'Santa Hat' })).toBeInTheDocument()
    }).not.toThrow()
  })
})
