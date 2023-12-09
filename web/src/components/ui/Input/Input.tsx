import { forwardRef } from 'react'

import { Icon } from '../Icon/Icon'

export interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'className' | 'placeholder' | 'ref'
  > {
  label: string
  containerClassName?: string
  inputClassName?: string
  icon?: string
  onIconClick?: () => void
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
      onIconClick,
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className={`${containerClassName}`}>
        <label
          htmlFor={id || name}
          className="block relative w-full h-24 border"
        >
          <input
            className={`py-4 pr-14 pl-6 font-sans text-2xl font-bold text-black bg-white border-2 border-black border-none peer h-[inherit] w-[inherit] ${inputClassName}`}
            name={name}
            id={id}
            type="text"
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
        </label>

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
