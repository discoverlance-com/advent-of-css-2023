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
  args: {
    icon: 'calendar',
    size: 24,
  },
  tags: ['autodocs'],
  argTypes: {
    color: { defaultValue: 'black', control: 'color' },
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Primary: Story = {}
