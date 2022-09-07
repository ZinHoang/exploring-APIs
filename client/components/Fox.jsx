/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'

import { getRanDomFox } from '../api/foxApi'

function Fox() {
  const [foxObj, setfoxObj] = useState(null)

  const clickHandler = () => {
    return getRanDomFox()
      .then((obj) => setfoxObj(obj))
      .catch((err) => {
        console.log('Err message: ' + err)
      })
  }

  return (
    <>
      <div className="flex-child ">
        <h1>Try Me!</h1>
        <button onClick={clickHandler}>FOX SAKE</button>
        <div>
          {foxObj && (
            <a href={`${foxObj?.link}`}>
              <img src={`${foxObj?.image}`} alt="Picture of a fox" />
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default Fox
