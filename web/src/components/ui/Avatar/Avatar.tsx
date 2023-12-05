import { Icon, type IconProps } from 'src/components/ui/Icon/Icon'
import { generateInitials } from 'src/lib/utils'

import Indicator from '../Indicator/Indicator'

type InitialsProp = {
  name: string
}

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

type Props =
  | ({
      variant: 'initials'
      indicator?: 'error' | 'warning' | 'success'
      isSanta?: boolean
    } & InitialsProp)
  | ({
      variant: 'image'
      indicator?: 'error' | 'warning' | 'success'
      isSanta?: boolean
    } & ImageProps)
  | ({
      variant: 'icon'
      indicator?: 'error' | 'warning' | 'success'
      isSanta?: boolean
    } & IconProps)

const avatarClassName =
  'relative h-18 w-18 cursor-pointer inline-block rounded-full border-avatar border-white hover:border-turquoiseGreen'

const Avatar = (props: Props) => {
  if (props.variant === 'initials') {
    const initials = generateInitials(props.name)
    return (
      <div
        className={`${avatarClassName} center bg-cruseo uppercase text-white`}
      >
        <span className="font-sans text-2xl font-bold">{initials}</span>

        <ExtraProperties isSanta={props.isSanta} indicator={props.indicator} />
      </div>
    )
  }

  if (props.variant === 'icon') {
    const { variant: _, ...iconProps } = props
    return (
      <div className={`${avatarClassName} center bg-cruseo text-white`}>
        <Icon size={32} {...iconProps} />

        <ExtraProperties isSanta={props.isSanta} indicator={props.indicator} />
      </div>
    )
  }

  if (props.variant === 'image') {
    const { variant: _, className, alt, ...otherImg } = props

    return (
      <div className={`${avatarClassName}`}>
        <img
          className={`${
            className ?? ''
          } aspect-square h-full w-full rounded-full object-cover`}
          alt={alt}
          {...otherImg}
        />

        <ExtraProperties isSanta={props.isSanta} indicator={props.indicator} />
      </div>
    )
  }

  return null
}

export default Avatar

function ExtraProperties({
  isSanta,
  indicator,
}: {
  indicator: Props['indicator']
  isSanta: Props['isSanta']
}) {
  return (
    <>
      {indicator && (
        <Indicator
          type={indicator}
          containerClassName="absolute -bottom-3 right-0"
        />
      )}

      {isSanta && (
        <img
          src="/avatars/santa-hat.png"
          className="absolute -right-2 -top-4 h-8 w-10"
          alt="Santa Hat"
        />
      )}
    </>
  )
}
