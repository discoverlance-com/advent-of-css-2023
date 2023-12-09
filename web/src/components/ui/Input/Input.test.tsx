import { render, screen } from '@redwoodjs/testing/web'

import { Input } from './Input'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Input', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Input label="Email" />)

      const input = screen.getByRole('textbox', { name: 'Email' })

      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('placeholder', '')
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
    }).not.toThrow()
  })
})
