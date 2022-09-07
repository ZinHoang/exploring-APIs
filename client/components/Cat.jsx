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
      <div className="flex-child cat">
        <h2>Cat is Pawsome</h2>
        <button onClick={clickHandler} className="cat">
          MEOW MEOW
        </button>
        <br />
        <br />
        {catObj && <img src={`${catObj?.url}`} alt="Cat Pic" />}
      </div>
    </>
  ) 
}

export default Cat
