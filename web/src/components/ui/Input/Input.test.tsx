import { Form } from '@redwoodjs/forms'
import { render, screen } from '@redwoodjs/testing/web'

import { Input } from './Input'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Input', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <Input name="email" label="Email" />
        </Form>
      )

      const input = screen.getByRole('textbox', { name: 'Email' })

      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('placeholder', '')
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
    }).not.toThrow()
  })
})
