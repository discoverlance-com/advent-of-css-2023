import Footer from 'src/components/Footer/Footer'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className="min-w-screen flex min-h-screen items-center justify-center bg-silverTree bg-auth bg-[length:1440px_auto] bg-[center_top] bg-no-repeat dark:bg-nileBlue min-[1440px]:bg-[length:100%_auto]">
        <div>
          <img
            src="/images/logo__secret-santa.svg"
            alt="hello"
            className="mt-10 w-full h-40"
          />
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default AuthLayout
