import { Form } from '@redwoodjs/forms'
import { render, screen } from '@redwoodjs/testing/web'

import { Checkbox } from './Checkbox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Checkbox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <Checkbox label="I accept the terms" name="accept" />
        </Form>
      )

      expect(
        screen.getByRole('checkbox', {
          name: 'I accept the terms',
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('checkbox', {
          name: 'I accept the terms',
        })
      ).toHaveAttribute('type', 'checkbox')
    }).not.toThrow()
  })
})
