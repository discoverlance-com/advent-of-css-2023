import { MetaTags } from '@redwoodjs/web'

import { RsvpButton } from 'src/components/ui/RsvpButton/RsvpButton'

const RsvpPage = () => {
  return (
    <>
      <MetaTags title="Rsvp" description="Rsvp page" />

      <h1 className="mt-8 text-center text-white uppercase font-condensed">
        <span className="text-5xl text-white lines-around">
          You&apos;re invited to
        </span>
        <span className="block text-7xl">Smith Christmas</span>
      </h1>
      <time
        dateTime="23-12-2023"
        className="block text-2xl text-center text-white font-handwriting"
      >
        December 23, 2023
      </time>

      <div className="flex gap-10 justify-between mt-8">
        <RsvpButton
          icon="thumbsdown"
          color="danger"
          text="Regretfully Decline"
        />

        <RsvpButton icon="thumbsup" color="success" text="I'll be there!" />
      </div>
    </>
  )
}

export default RsvpPage
