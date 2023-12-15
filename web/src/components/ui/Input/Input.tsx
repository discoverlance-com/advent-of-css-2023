import { forwardRef } from 'react'

import { InputField, Label } from '@redwoodjs/forms'

import { Icon } from '../Icon/Icon'

export interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'className' | 'placeholder' | 'ref' | 'type'
  > {
  label: string
  name: string
  containerClassName?: string
  inputClassName?: string
  icon?: string
  onIconClick?: () => void
  type?: Exclude<React.HTMLInputTypeAttribute, 'checkbox'>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      containerClassName,
      inputClassName,
      id,
      icon,
      name,
      type,
      onIconClick,
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className={`${containerClassName ?? ''}`}>
        <Label
          htmlFor={id || name}
          name={name}
          className="block relative w-full h-24 border"
        >
          <InputField
            className={`peer h-[inherit] w-[inherit] border-2 border-none border-black bg-white py-4 pl-6 pr-14 font-sans text-2xl font-bold text-black ${
              inputClassName ?? ''}`}
            name={name}
            id={id}
            type={type || 'text'}
            placeholder=""
            ref={ref}
            {...inputProps}
          />

          {/* text-spanishGreen */}
          <span className="absolute left-6 top-1/2 -mt-[calc(28px/2)] font-handwriting text-xl font-bold uppercase tracking-tighter transition-[left,top,margin] duration-300 peer-placeholder-shown:pointer-events-none peer-focus:left-2 peer-focus:top-2 peer-focus:-mt-0">
            {label}
          </span>

          {icon && (
            <button
              aria-hidden
              className="absolute right-2 top-1/2 -mt-[21px] h-9 rounded-full p-1 hover:bg-gray-50"
              onClick={onIconClick}
            >
              <Icon icon={icon} size={32} />
            </button>
          )}
        </Label>

        <style>{`
        input:not(:placeholder-shown) + span {
          top: 0.5rem;
          margin-top: -0px;
          left: 0.5rem;
        }
      `}</style>
      </div>
    )
  }
)

// export const Input = ({
//   label,
//   containerClassName,
//   inputClassName,
//   id,
//   icon,
//   name,
//   onIconClick,
//   ...inputProps
// }: InputProps) => {

// }
