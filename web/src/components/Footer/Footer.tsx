const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-0 w-full bg-acadia py-[72px] text-center dark:bg-blackPearl">
      <img
        src="/images/logo__secret-santa--small.svg"
        alt="Secret Santa"
        className="relative mx-auto mb-16"
      />
      <p className="font-sans font-medium text-scotchMist">
        Copyright &copy; {new Date().getFullYear()}.{' '}
        <a
          href="https://discoverlance.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Discoverlance
        </a>{' '}
        . All rights reserved
        <br />
        Terms &amp; Conditions . Privacy Policy . Disclaimers
      </p>
    </footer>
  )
}

export default Footer
