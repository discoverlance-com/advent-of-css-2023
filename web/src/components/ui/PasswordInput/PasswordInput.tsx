import { useRef, useState } from 'react'

import { Input, type InputProps } from '../Input/Input'

interface Props extends Omit<InputProps, 'icon'> {}

export const PasswordInput = ({ ...inputProps }: Props) => {
  // const [inputType, setInputType] = useState<'password' | 'text'>('password')
  // const [icon, setIcon] = useState<'eyeopened' | 'eyeclosed'>('eyeopened')
  const [isPasswordShowing, setIsPasswordShowing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onIconClick = () => {
    // if (inputType === 'text') {
    //   setIcon('eyeopened')
    //   setInputType('password')
    // } else {
    //   setIcon('eyeclosed')
    //   setInputType('text')
    // }
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
