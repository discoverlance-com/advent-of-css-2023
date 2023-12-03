interface Props {
  icon: string
  size?: number
  color?: string
  className?: string
}

export const Icon = ({ icon, size = 24, color, className }: Props) => {
  return (
    <svg
      className={className}
      role="img"
      width={size}
      height={size}
      fill={color || 'black'}
    >
      <use xlinkHref={`/icons/sprite.svg#${icon}`}></use>
    </svg>
  )
}
