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

import { PasswordInput } from './PasswordInput'

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  tags: ['autodocs'],
  render(props) {
    return (
      <div className="max-w-md">
        <PasswordInput {...props} />
      </div>
    )
  },
  args: {
    label: 'Password',
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
