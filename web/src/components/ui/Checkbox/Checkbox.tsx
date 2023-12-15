import { CheckboxField, Label } from '@redwoodjs/forms'

import { Icon } from '../Icon/Icon'

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'placeholder' | 'type' | 'className' | 'ref'
  > {
  containerClassName?: string
  label: string
  name: string
}

export const Checkbox = ({
  label,
  id,
  name,
  containerClassName,
  ...other
}: Props) => {
  return (
    <div className={` ${containerClassName ?? ''}`}>
      <Label
        htmlFor={id || name}
        name={name}
        className="relative mb-4 flex items-center  gap-4 before:block before:h-10 before:w-10 before:border-2 before:border-none before:border-black before:bg-white before:content-[''] hover:cursor-pointer"
      >
        <CheckboxField
          name={name}
          id={id || name}
          className="hidden peer"
          {...other}
        />
        <Icon
          icon="check"
          className="hidden text-spanishGreen peer-checked:absolute peer-checked:left-2 peer-checked:block"
        />
        <span className="text-3xl text-black uppercase font-handwriting dark:text-white">
          {label}
        </span>
      </Label>
    </div>
  )
}

export default Checkbox
