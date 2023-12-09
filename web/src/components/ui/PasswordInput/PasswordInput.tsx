import { useRef, useState } from 'react'

import { Input, type InputProps } from '../Input/Input'

interface Props extends Omit<InputProps, 'icon' | 'type'> {}

export const PasswordInput = ({ ...inputProps }: Props) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onIconClick = () => {
    setIsPasswordShowing((prev) => !prev)
    inputRef?.current?.focus()
  }
  return (
    <Input
      ref={inputRef}
      type={isPasswordShowing ? 'text' : 'password'}
      {...inputProps}
      icon={isPasswordShowing ? 'eyeclosed' : 'eyeopened'}
      onIconClick={onIconClick}
    />
  )
}
