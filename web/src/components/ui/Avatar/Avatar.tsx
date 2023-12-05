import { Icon, type IconProps } from 'src/components/ui/Icon/Icon'
import { generateInitials } from 'src/lib/utils'

type InitialsProp = {
  name: string
}

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

interface ImageIndicatorProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  indicator: 'error' | 'warning' | 'success'
}

type Props =
  | ({
      variant: 'initials'
    } & InitialsProp)
  | ({ variant: 'image' } & ImageProps)
  | ({ variant: 'imageSanta' } & ImageProps)
  | ({ variant: 'imageIndicator' } & ImageIndicatorProps)
  | ({ variant: 'icon' } & IconProps)

const Avatar = (props: Props) => {
  if (props.variant === 'initials') {
    const initials = generateInitials(props.name)
    return (
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-[6px] border-white bg-cruseo">
        <span className="font-sans text-2xl font-bold text-white">
          {initials}
        </span>
      </div>
    )
  }

  if (props.variant === 'icon') {
    const { variant: _, ...iconProps } = props
    return (
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-[6px] border-turquoiseGreen bg-cruseo">
        <Icon color="white" {...iconProps} />
      </div>
    )
  }

  if (props.variant === 'image') {
    const { variant: _, className, alt, ...otherImg } = props

    return (
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-[6px] border-white">
        <img
          className={`${className} aspect-square h-full w-full rounded-full`}
          alt={alt}
          {...otherImg}
        />
      </div>
    )
  }

  if (props.variant === 'imageIndicator') {
    const { variant: _, indicator, className, alt, ...otherImg } = props
    const src =
      indicator === 'error'
        ? '/error.png'
        : indicator === 'warning'
        ? '/warning.png'
        : '/success.png'

    return (
      <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-[6px] border-white">
        <img
          className={`${className} aspect-square h-full w-full rounded-full`}
          alt={alt}
          {...otherImg}
        />

        <img
          src={src}
          className="absolute -bottom-3 right-0 h-6 w-6"
          alt="Indicator"
        />
      </div>
    )
  }

  if (props.variant === 'imageSanta') {
    const { variant: _, className, alt, ...otherImg } = props

    return (
      <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-[6px] border-white">
        <img
          className={`${className} aspect-square h-full w-full rounded-full`}
          alt={alt}
          {...otherImg}
        />

        <img
          src="/avatars/santa-hat.png"
          className="absolute -top-4 right-0 h-8 w-8"
          alt="Santa Hat"
        />
      </div>
    )
  }
  return (
    <div>
      <h2>{'Avatar'}</h2>
      <p>{'Find me in ./web/src/components/Avatar/Avatar.tsx'}</p>
    </div>
  )
}

export default Avatar
