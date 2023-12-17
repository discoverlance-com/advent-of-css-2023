import { Link, routes } from '@redwoodjs/router'

import { Icon } from 'src/components/ui/Icon/Icon'

interface Props {
  icon: string
  text: string
  color: 'success' | 'danger'
}

export const RsvpButton = ({ icon, text, color }: Props) => {
  return (
    <Link
      to={routes.rsvpDecline()}
      className="group flex max-w-[300px] items-center"
    >
      <div
        className={`z-10 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white group-hover:bg-white ${
          color === 'danger'
            ? 'bg-orangeRed group-hover:border-orangeRed'
            : 'bg-spanishGreen group-hover:border-spanishGreen'
        }`}
      >
        <Icon
          size={48}
          icon={icon}
          className="text-white group-hover:text-black"
        />
      </div>
      <div
        className={`-ml-4 flex h-18 w-48 items-center justify-center bg-white px-6 py-4 font-sans text-xl font-bold leading-none tracking-tight ${
          color === 'danger'
            ? 'group-hover:bg-orangeRed'
            : 'group-hover:bg-spanishGreen'
        } group-hover:text-white`}
      >
        <span>{text}</span>
      </div>
    </Link>
  )
}
