import { render, screen } from '@redwoodjs/testing/web'

import { TextInput } from './TextInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TextInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TextInput label="Email" />)

      const input = screen.getByRole('textbox', { name: 'Email' })

      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('placeholder', '')
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
    }).not.toThrow()
  })
})
