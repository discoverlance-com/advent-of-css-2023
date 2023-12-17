import { Input, type InputProps } from 'src/components/ui/Input/Input'

import { Icon } from '../ui/Icon/Icon'

interface Props extends Omit<InputProps, 'icon' | 'type'> {}

export const Uploadinput = ({ label, name, ...inputProps }: Props) => {
  return (
    <div className="flex relative justify-between items-center px-4 border-4 border-white border-dashed h-18">
      <p
        className="absolute left-4 text-xl font-bold tracking-tighter text-white uppercase font-handwriting"
        aria-hidden
      >
        {label}
      </p>
      <span className="absolute top-1/2 left-1/2 -mt-4 -ml-20 text-lg text-gray-200">
        Drag and Drop an Image
      </span>
      <Icon icon="upload" className="absolute right-4 text-white not-sr-only" />
      <Input
        inputClassName="w-full h-full invisible"
        labelClassName="h-full w-full border-0"
        labelTextClassName="hidden"
        type="file"
        {...inputProps}
        label={label}
        name={name}
      />
    </div>
  )
}
