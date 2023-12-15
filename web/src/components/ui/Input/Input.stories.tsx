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

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  render(props) {
    return (
      <div className="max-w-md">
        <Form>
          <Input {...props} />
        </Form>
      </div>
    )
  },
  parameters: {
    backgrounds: {
      default: 'silverTree',
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email',
    required: true,
    name: 'email',
  },
}

export const Username: Story = {
  args: {
    type: 'text',
    label: 'Username',
    required: true,
    name: 'username',
    icon: 'user',
  },
}

export const IconInput: Story = {
  args: {
    type: 'password',
    label: 'Password',
    icon: 'eyeclosed',
    name: 'password',
  },
}
