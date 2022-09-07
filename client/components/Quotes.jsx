import React, { useState } from 'react'

import { getQuote } from '../api/quotesApi'

function Quotes() {
  const [quotesObj, setQuotesObj] = useState(null)

  const clickHandler = async () => {
    try {
      const obj = await getQuote()
      setQuotesObj(obj)
    } catch (err) {
      console.log('Err message: ' + err)
    }
  }

  return (
    <>
      <div className="flex-child ">
        <h2>A day without sunshine is like, you know, night ◠‿◠</h2>
        <button onClick={clickHandler}>GET QUOTE</button>
        <h3 className="quote">{quotesObj?.affirmation}</h3>
      </div>
    </>
  )
}

export default Quotes
