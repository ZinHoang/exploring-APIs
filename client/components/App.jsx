import React from 'react'

import Pokemon from './Pokemon'
import Cat from './Cat'
import Quotes from './Quotes'

function App() {
  return (
    <>
      <div className="title">Exploring APIs !!!</div>
      <div className="container">
        <Pokemon />
        <Cat />
        <Quotes />
      </div>
    </>
  )
}

export default App
