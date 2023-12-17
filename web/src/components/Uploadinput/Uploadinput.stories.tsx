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

import { Uploadinput } from './Uploadinput'

const meta: Meta<typeof Uploadinput> = {
  component: Uploadinput,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Uploadinput>

export const AvatarUpload: Story = {
  args: {
    name: 'avatar',
    label: 'Avatar',
  },
}
