// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import AuthLayout from './layouts/AuthLayout/AuthLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={AuthLayout}>
        <Route path="/rsvp" page={RsvpPage} name="rsvp" />
        <Route path="/rsvp-decline" page={RsvpDeclinePage} name="rsvpDecline" />
        <Route path="/rsvp-accept" page={RsvpAcceptPage} name="rsvpAccept" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
