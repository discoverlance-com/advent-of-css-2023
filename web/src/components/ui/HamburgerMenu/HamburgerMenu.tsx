interface Props {
  open?: boolean
  handleToggle?: () => void
}

export const HamburgerMenu = ({ open = false, handleToggle }: Props) => {
  return (
    <button
      onClick={handleToggle}
      aria-expanded={open}
      className="flex flex-col justify-center items-center p-2 h-16 w-18 bg-supernova hover:bg-supernova/90"
    >
      <span className="sr-only">{open ? 'Close Menu' : 'Open Menu'}</span>
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform duration-500 ${
          !open ? '-translate-y-3' : 'rotate-45'
        }`}
      ></div>
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform duration-500 ${
          !open ? '':'hidden'}`}
      ></div>
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform duration-500 ${
          !open ? 'translate-y-3' : '-rotate-45'
        }`}
      ></div>
    </button>
  )
}
