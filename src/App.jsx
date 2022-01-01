import React from 'react'
import {
  Footer,
  Navbar,
  Services,
  Transactions,
  Loader,
  Welcome
} from './components'
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Loader />
      <Footer />
    </div>
  )
}

export default App
