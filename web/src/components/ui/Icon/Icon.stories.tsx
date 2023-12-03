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

import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    color: { defaultValue: 'black', control: 'color' },
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Calendar: Story = {
  args: {
    icon: 'calendar',
  },
}

export const Check: Story = {
  args: {
    icon: 'check',
  },
}

export const Chevron: Story = {
  args: {
    icon: 'chevron',
  },
}

export const Close: Story = {
  args: {
    icon: 'close',
  },
}

export const EyeClosed: Story = {
  args: {
    icon: 'eyeclosed',
  },
}

export const EyeOpened: Story = {
  args: {
    icon: 'eyeopened',
  },
}

export const Logout: Story = {
  args: {
    icon: 'logout',
    color: '#ff0000',
  },
}

export const Minus: Story = {
  args: {
    icon: 'minus',
  },
}

export const Plus: Story = {
  args: {
    icon: 'plus',
  },
}

export const Question: Story = {
  args: {
    icon: 'question',
  },
}

export const ThumbsUp: Story = {
  args: {
    icon: 'thumbsup',
  },
}

export const ThumbsDown: Story = {
  args: {
    icon: 'thumbsdown',
  },
}

export const User: Story = {
  args: {
    icon: 'user',
  },
}
