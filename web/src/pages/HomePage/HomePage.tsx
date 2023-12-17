import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <ul className="flex h-16 items-center gap-4 bg-silverTree pl-8">
        <li>
          <Link to={routes.rsvp()}>RSVP</Link>
        </li>
      </ul>
    </>
  )
}

export default HomePage
