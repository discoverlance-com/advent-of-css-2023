type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-w-screen min-h-screen bg-silverTree bg-auth bg-[length:1440px_auto] bg-[center_top] bg-no-repeat dark:bg-nileBlue min-[1440px]:bg-[length:100%_auto]">
      <main className="flex items-center justify-center">
        <div>
          <img
            src="/images/logo__secret-santa.svg"
            alt="hello"
            className="mt-10 h-40 w-full"
          />
          {children}
        </div>
      </main>
    </div>
  )
}

export default AuthLayout
