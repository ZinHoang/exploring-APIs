import React from 'react'

import Fox from './Fox'
import Cat from './Cat'
import Quotes from './Quotes'

function App() {
  return (
    <>
      <h1 className="title">Exploring APIs!</h1>
      <div className="container">
        <Fox />
        <Cat />
        <Quotes />
      </div>
    </>
  )
}

export default App
