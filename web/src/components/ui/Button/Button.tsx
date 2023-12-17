import { forwardRef } from 'react'

import { Icon, type IconProps } from 'src/components/ui/Icon/Icon'

interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {}

type Props =
  | ({ variant?: 'button' } & ButtonProps)
  | ({ variant?: 'icon' } & Omit<ButtonProps, 'children'> &
      Pick<IconProps, 'color' | 'size' | 'icon'>)

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  if (props.variant === 'icon') {
    const { variant: _, size, color, icon, className, ...other } = props

    return (
      <button
        className={`rounded-full bg-supernova p-4 text-black hover:bg-scotchMist hover:bg-supernova/80 ${
          className ?? ''}`}
        ref={ref}
        {...other}
      >
        <Icon icon={icon} color={color} size={size || 30} />
      </button>
    )
  } else {
    const { variant: _, children, className, ...other } = props

    return (
      <button
        className={`w-full rounded-[999px] bg-supernova px-32 py-4 font-handwriting text-3xl uppercase leading-10 tracking-tighter text-black hover:bg-supernova/80 disabled:cursor-not-allowed disabled:bg-scotchMist ${
          className ?? ''}`}
        ref={ref}
        {...other}
      >
        {children}
      </button>
    )
  }
})
