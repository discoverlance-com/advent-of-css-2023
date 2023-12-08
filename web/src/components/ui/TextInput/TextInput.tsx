import { Icon } from '../Icon/Icon'

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'className' | 'placeholder'
  > {
  label: string
  containerClassName?: string
  inputClassName?: string
  icon?: string
}

export const TextInput = ({
  label,
  containerClassName,
  inputClassName,
  id,
  icon,
  name,
  ...inputProps
}: Props) => {
  return (
    <div className={`${containerClassName}`}>
      <label htmlFor={id || name} className="block relative w-full h-24 border">
        <input
          className={`py-4 pr-14 pl-6 font-sans text-2xl font-bold text-black bg-white border-2 border-black border-none peer h-[inherit] w-[inherit] ${inputClassName}`}
          name={name}
          id={id}
          type="text"
          placeholder=""
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
