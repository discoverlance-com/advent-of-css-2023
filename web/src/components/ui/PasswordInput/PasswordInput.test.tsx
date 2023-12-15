import { Form } from '@redwoodjs/forms'
import { render, screen } from '@redwoodjs/testing/web'

import { PasswordInput } from './PasswordInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <PasswordInput label="Password" name="password" />
        </Form>
      )

      expect(screen.getByLabelText('Password')).toBeInTheDocument()
      expect(screen.getByLabelText('Password')).toHaveAttribute(
        'type',
        'password'
      )
    }).not.toThrow()
  })
})
