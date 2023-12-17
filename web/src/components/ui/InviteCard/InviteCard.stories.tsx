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

import { InviteCard } from './InviteCard'

const meta: Meta<typeof InviteCard> = {
  component: InviteCard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'silverTree',
    },
  },
}

export default meta

type Story = StoryObj<typeof InviteCard>

export const DisabledUser: Story = {
  args: {
    email: 'john@example.com',
    image: '/avatars/avatar-02.png',
    username: 'John Doe',
    indicator: 'warning',
  },
}

export const NewUser: Story = {
  args: {
    email: 'jane@example.com',
    image: '/avatars/avatar-02.png',
    username: 'Jane Doe',
    indicator: 'success',
  },
}
