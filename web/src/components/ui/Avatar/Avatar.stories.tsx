import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    indicator: {
      control: 'radio',
      options: ['error', 'warning', 'success'],
      description: 'Type of avatar indicator',
    },
    isSanta: {
      description: 'Add a santa hat',
    },
    icon: {
      description: 'Icon for the avatar',
    },
    size: {
      description: 'Size of the avatar icon',
      defaultValue: 32,
    },
    name: {
      description: 'The name to be used for getting initials',
    },
    color: {
      description: 'Color of the avatar icon',
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const InitialsOnly: Story = {
  args: {
    variant: 'initials',
    name: 'Lance Armah-Abraham',
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'icon',
    icon: 'user',
  },
}

export const ImageOnly: Story = {
  args: {
    variant: 'image',
    src: '/avatars/avatar-01.png',
    alt: 'Avatar',
  },
}

export const SantaImage: Story = {
  args: {
    variant: 'image',
    src: '/avatars/avatar-01.png',
    alt: 'Avatar',
    isSanta: true,
  },
}

export const InitialsIndicator: Story = {
  args: {
    ...InitialsOnly.args,
    indicator: 'success',
  },
}

export const ImageIndicator: Story = {
  args: {
    ...ImageOnly.args,
    indicator: 'warning',
  },
}

export const IconIndicator: Story = {
  args: {
    ...IconOnly.args,
    indicator: 'error',
  },
}
