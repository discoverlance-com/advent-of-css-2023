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

import { Myaccount } from './Myaccount'

const meta: Meta<typeof Myaccount> = {
  component: Myaccount,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Myaccount>

export const Default: Story = {
  args: {
    username: 'John Doe',
    image: '/avatars/avatar-02.png',
  },
}

export const Opened: Story = {
  args: {
    username: 'Jane Doe',
    image: '/avatars/avatar-01.png',
  },
}
