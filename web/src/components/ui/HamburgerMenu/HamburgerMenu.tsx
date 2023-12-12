import { useState } from 'react'

export const HamburgerMenu = () => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <button
      onClick={handleClick}
      aria-expanded={expanded}
      className="flex flex-col justify-center items-center p-2 h-16 w-18 bg-supernova hover:bg-supernova/90"
    >
      <span className="sr-only">{expanded ? 'Close Menu' : 'Open Menu'}</span>
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform duration-500 ${
          !expanded ? '-translate-y-3' : 'rotate-45'
        }`}
      ></div>
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform duration-500 ${
          !expanded ? '':'hidden'}`}
      ></div>
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform duration-500 ${
          !expanded ? 'translate-y-3' : '-rotate-45'
        }`}
      ></div>
    </button>
  )
}
