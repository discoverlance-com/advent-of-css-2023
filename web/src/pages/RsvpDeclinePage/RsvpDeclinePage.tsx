import { MetaTags } from '@redwoodjs/web'

const RsvpDeclinePage = () => {
  return (
    <>
      <MetaTags title="RsvpDecline" description="RsvpDecline page" />

      <h1 className="mt-8 space-y-4 text-center text-white uppercase font-condensed">
        <span className="lines-around relative block max-w-[260px] text-6xl">
          Thanks
        </span>
        <span className="block text-7xl">You&apos;ll be missed</span>
      </h1>
    </>
  )
}

export default RsvpDeclinePage
