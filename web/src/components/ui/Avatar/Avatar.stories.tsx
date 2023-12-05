import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {
    indicator: {
      control: 'radio',
      options: ['error', 'warning', 'success'],
      description: 'Type of avatar indicator',
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Initials: Story = {
  args: {
    variant: 'initials',
    name: 'Lance Armah-Abraham',
  },
}

export const Icon: Story = {
  args: {
    variant: 'icon',
    icon: 'user',
  },
}

export const Image: Story = {
  args: {
    variant: 'image',
    src: '/avatars/avatar-01.png',
    alt: 'Avatar',
  },
}

export const SantaImage: Story = {
  args: {
    variant: 'imageSanta',
    src: '/avatars/avatar-01.png',
    alt: 'Avatar',
  },
}

export const IndicatorImage: Story = {
  args: {
    variant: 'imageIndicator',
    indicator: 'error',
    src: '/avatars/avatar-01.png',
    alt: 'Avatar',
  },
}
