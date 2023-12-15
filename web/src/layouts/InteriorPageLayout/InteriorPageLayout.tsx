import { Link } from '@redwoodjs/router'

import Footer from 'src/components/Footer/Footer'
import { NavigationPane } from 'src/components/NavigationPane/NavigationPane'
import { Myaccount } from 'src/components/ui/Myaccount/Myaccount'

type InteriorPageLayoutProps = {
  children?: React.ReactNode
}

const InteriorPageLayout = ({ children }: InteriorPageLayoutProps) => {
  return (
    <>
      <main className="grid grid-cols-12 gap-x-5 min-h-screen bg-silverTree dark:bg-nileBlue">
        <aside className="col-span-4 bg-[url('/images/bg__interior.svg')] bg-cover pb-10">
          <div className="fixed z-50">
            <NavigationPane />
          </div>
          <Link to="/" className="absolute left-10 top-[8vw] w-[25vw]">
            <img
              src="/images/logo__secret-santa.svg"
              alt="Secret Santa"
              height={160}
              width={250}
            />
          </Link>
        </aside>

        <div className="col-span-8 pt-8 pr-12">
          <div className="flex justify-end">
            <Myaccount image="/avatars/avatar-01.png" username="John Doe" />
          </div>
          <div>{children}</div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default InteriorPageLayout
