import React, { useState } from 'react'

import { getRandomCat } from '../api/catApi'

function Cat() {
  const [catObj, setCatObj] = useState(null)

  const clickHandler = async () => {
    try {
      const obj = await getRandomCat()
      setCatObj(obj[0])
    } catch (err) {
      console.log('Err message: ' + err)
    }
  }

  return (
    <>
      <div className="flex-child ">
        <h1>Who is going to bell the Cat?</h1>
        <button onClick={clickHandler}>MOEW MOEW</button>
        {catObj && <img src={`${catObj?.url}`} alt="Cat Pic" />}
      </div>
    </>
  )
}

export default Cat
