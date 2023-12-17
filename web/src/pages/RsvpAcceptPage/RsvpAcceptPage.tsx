import { Form } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import { Button } from 'src/components/ui/Button/Button'
import { PasswordInput } from 'src/components/ui/PasswordInput/PasswordInput'
import { Uploadinput } from 'src/components/Uploadinput/Uploadinput'

const RsvpAcceptPage = () => {
  return (
    <>
      <MetaTags title="RsvpAccept" description="RsvpAccept page" />

      <p className="mt-4 text-2xl text-center text-white uppercase font-handwriting">
        Awesome!
      </p>
      <h1 className="lines-around relative block  max-w-[260px] text-center font-condensed text-6xl uppercase text-white">
        Sign Up
      </h1>

      <Form className="mx-auto mt-4 space-y-3 max-w-md">
        <PasswordInput label="Password" name="password" />
        <Uploadinput
          label="Avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <Button>Submit</Button>
      </Form>
    </>
  )
}

export default RsvpAcceptPage
