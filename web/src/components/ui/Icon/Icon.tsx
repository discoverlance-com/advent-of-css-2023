export interface IconProps {
  icon: string
  size?: number
  color?: string
  className?: string
}

export const Icon = ({ icon, size = 24, color, className }: IconProps) => {
  return (
    <svg
      className={className}
      role="img"
      data-icon={icon}
      width={size}
      height={size}
      fill={color || 'black'}
    >
      <use xlinkHref={`/icons/sprite.svg#${icon}`}></use>
    </svg>
  )
}
