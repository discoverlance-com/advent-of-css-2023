import { useState } from 'react'

import { Link } from '@redwoodjs/router'

import { HamburgerMenu } from 'src/components/ui/HamburgerMenu/HamburgerMenu'

const links = [
  { title: 'Dashboard', to: '/' },
  { title: 'Our Event', to: '/' },
  { title: 'My Wish List', to: '/' },
]

export const NavigationPane = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setIsHamburgerOpen((prev) => !prev)
  }

  return (
    <>
      <div
        className={`flex h-screen w-96 flex-col bg-supernova pb-8 pl-8 pt-32 transition-transform duration-500 ${
          isHamburgerOpen ? 'translate-x-0' : '-translate-x-[110%]'
        }`}
      >
        <div className="flex flex-col flex-auto justify-between">
          <nav className="flex flex-col gap-4" aria-label="Main Navigation">
            {links.map((link) => (
              <Link
                to={link.to}
                key={link.title}
                className="text-6xl font-semibold tracking-wider leading-none uppercase font-condensed hover:text-orangeRed"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <nav aria-label="Past Events Navigation">
            <p className="text-5xl font-bold tracking-wider uppercase font-condensed text-spanishGreen">
              Past Events
            </p>

            <ul className="mt-2">
              <li className="font-sans">
                <Link
                  to="/"
                  className="flex flex-col gap-1 hover:text-orangeRed"
                >
                  <span className="text-2xl font-bold">Baltis Christmas</span>
                  <span>December 23, 2024</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="absolute top-6 left-8">
        <HamburgerMenu open={isHamburgerOpen} handleToggle={toggleHamburger} />
      </div>
    </>
  )
}
