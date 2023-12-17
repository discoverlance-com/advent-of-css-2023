import Avatar from 'src/components/ui/Avatar/Avatar'

import { Icon } from '../Icon/Icon'
import { IndicatorProps } from '../Indicator/Indicator'

interface Props {
  indicator: IndicatorProps['type']
  image: string
  username: string
  email: string
}

export const InviteCard = ({ indicator, image, username, email }: Props) => {
  return (
    <div className="flex relative gap-6 items-center py-4 pr-2 max-w-sm bg-white">
      <div className="-ml-6">
        <Avatar
          variant="image"
          indicator={indicator}
          src={image}
          alt={username}
        />
      </div>

      <div className="">
        <p className="text-4xl font-bold">{username}</p>
        <p>{email}</p>
      </div>

      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
        <Icon icon="close" />
      </button>
    </div>
  )
}
