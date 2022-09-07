/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'

import { getRandomFox } from '../api/foxApi'

function Fox() {
  const [foxObj, setfoxObj] = useState(null)

  const clickHandler = async () => {
    try {
      const obj = await getRandomFox()
      return setfoxObj(obj)
    } catch (err) {
      console.log('Err message: ' + err)
    }
  }

  return (
    <>
      <div className="flex-child ">
        <h1>I swear, I am not swearing</h1>
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
