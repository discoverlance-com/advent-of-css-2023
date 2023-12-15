// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import { PasswordInput } from './PasswordInput'

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  tags: ['autodocs'],
  render(props) {
    return (
      <div className="max-w-md">
        <Form>
          <PasswordInput {...props} />
        </Form>
      </div>
    )
  },
  args: {
    label: 'Password',
    name: 'password',
  },
  parameters: {
    backgrounds: {
      default: 'silverTree',
    },
  },
}

export default meta

type Story = StoryObj<typeof PasswordInput>

export const Primary: Story = {}
