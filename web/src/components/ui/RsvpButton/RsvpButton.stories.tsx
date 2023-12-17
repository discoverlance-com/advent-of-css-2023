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

import { RsvpButton } from './RsvpButton'

const meta: Meta<typeof RsvpButton> = {
  component: RsvpButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RsvpButton>

export const Ok: Story = {
  args: {
    icon: 'thumbsup',
    color: 'success',
    text: 'Yes',
  },
}

export const No: Story = {
  args: {
    icon: 'thumbsdown',
    color: 'danger',
    text: 'No please',
  },
}
