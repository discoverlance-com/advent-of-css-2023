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

import Indicator from './Indicator'

const meta: Meta<typeof Indicator> = {
  component: Indicator,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio', options: ['warning', 'error', 'success'] },
    },
    iconSize: {
      defaultValue: 16,
    },
  },
}

export default meta

type Story = StoryObj<typeof Indicator>

export const Success: Story = {
  args: {
    type: 'success',
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
  },
}
