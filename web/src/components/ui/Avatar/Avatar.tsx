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
  'relative flex h-[68px] w-[68px] cursor-pointer items-center justify-center rounded-full border-[6px] border-white hover:border-turquoiseGreen'

const Avatar = (props: Props) => {
  if (props.variant === 'initials') {
    const initials = generateInitials(props.name)
    return (
      <div className={`${avatarClassName} bg-cruseo`}>
        <span className="font-sans text-2xl font-bold text-white">
          {initials}
        </span>

        <ExtraProperties isSanta={props.isSanta} indicator={props.indicator} />
      </div>
    )
  }

  if (props.variant === 'icon') {
    const { variant: _, ...iconProps } = props
    return (
      <div className={`${avatarClassName} bg-cruseo`}>
        <Icon color="white" {...iconProps} />

        <ExtraProperties isSanta={props.isSanta} indicator={props.indicator} />
      </div>
    )
  }

  if (props.variant === 'image') {
    const { variant: _, className, alt, ...otherImg } = props

    return (
      <div className={`${avatarClassName}`}>
        <img
          className={`${className} aspect-square h-full w-full rounded-full`}
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
        <img
          src={
            indicator === 'error'
              ? '/error.png'
              : indicator === 'warning'
              ? '/warning.png'
              : '/success.png'
          }
          className="absolute -bottom-3 right-0 h-6 w-6"
          alt="Indicator"
        />
      )}

      {isSanta && (
        <img
          src="/avatars/santa-hat.png"
          className="absolute -top-4 right-0 h-8 w-8"
          alt="Santa Hat"
        />
      )}
    </>
  )
}
