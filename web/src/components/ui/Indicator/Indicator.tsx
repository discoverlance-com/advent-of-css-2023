import { Icon } from '../Icon/Icon'

export interface IndicatorProps {
  type: 'success' | 'warning' | 'error'
  /**
   * Size of the icon (default: 16px)
   */
  iconSize?: number
  containerClassName?: string
}

export const Indicator = ({
  type,
  containerClassName,
  iconSize = 16,
}: IndicatorProps) => {
  const icon =
    type === 'error' ? 'minus' : type === 'warning' ? 'question' : 'check'
  const bg =
    type === 'error'
      ? 'bg-orangeRed'
      : type === 'warning'
      ? 'bg-supernova'
      : 'bg-spanishGreen'

  return (
    <div
      className={`center h-6 w-6 rounded-full border-2 border-white ${bg}  ${
        type === 'warning' ? 'text-black' : 'text-white'
      } ${containerClassName ?? ''}`}
    >
      <Icon icon={icon} size={iconSize} />
    </div>
  )
}
