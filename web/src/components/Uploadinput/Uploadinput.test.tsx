import { Form } from '@redwoodjs/forms'
import { render } from '@redwoodjs/testing/web'

import { Uploadinput } from './Uploadinput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Uploadinput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <Uploadinput name="avatar" label="Avatar" />
        </Form>
      )
    }).not.toThrow()
  })
})
