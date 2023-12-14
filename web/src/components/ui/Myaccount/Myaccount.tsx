import { useEffect, useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Avatar from '../Avatar/Avatar'
import { Icon } from '../Icon/Icon'

interface Props {
  username: string
  image: string
}

export const Myaccount = ({ username, image }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDropdownOpen) {
        closeDropdown()
      }
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isDropdownOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex gap-2 items-center"
        onClick={toggleDropdown}
        aria-controls="account-dropdown"
        aria-expanded={isDropdownOpen}
      >
        <motion.div animate={{ rotate: isDropdownOpen ? '180deg' : '0deg' }}>
          <Icon icon="chevron" className="text-black dark:text-white" />
        </motion.div>
        <Avatar variant="image" src={image} alt={username} />
        <p className="flex flex-col gap-1 justify-center text-black dark:text-white">
          <span className="text-sm">Logged in as</span>{' '}
          <span className="text-lg font-bold">{username}</span>
        </p>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
            className={`block absolute left-6 top-24 z-50 py-5 pr-5 pl-4 bg-white dropdown`}
            id="account-dropdown"
            aria-label="My Account"
          >
            <ul className="space-y-5">
              <li>
                <p className="flex gap-4 items-center">
                  <Icon icon="user" className="text-pastelMagenta" size={32} />
                  <span className="text-3xl tracking-wide uppercase font-condensed">
                    My Account
                  </span>
                </p>
              </li>
              <li>
                <p className="flex gap-4 items-center">
                  <Icon
                    icon="calendar"
                    className="text-pastelMagenta"
                    size={32}
                  />
                  <span className="text-3xl tracking-wide uppercase font-condensed">
                    My Event
                  </span>
                </p>
              </li>
              <li>
                <p className="flex gap-4 items-center">
                  <Icon
                    icon="logout"
                    className="text-pastelMagenta"
                    size={32}
                  />
                  <span className="text-3xl tracking-wide uppercase font-condensed">
                    Logout
                  </span>
                </p>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>{' '}
    </div>
  )
}
