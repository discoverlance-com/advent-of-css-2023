import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-center text-5xl font-bold">HomePage</h1>
      <p className="mt-4 text-center">
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p className="mt-4 text-center">
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage