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

import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  tags: ['autodocs'],
  render(props) {
    return (
      <div className="max-w-md">
        <TextInput {...props} />
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

type Story = StoryObj<typeof TextInput>

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email',
  },
}

export const IconInput: Story = {
  args: {
    type: 'password',
    label: 'Password',
    icon: 'eyeclosed',
  },
}
