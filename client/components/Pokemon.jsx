/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'

import { getRandomPokemon } from '../api/pokemonApi'

function Pokemon() {
  const [pokemonObj, setPokemonObj] = useState(null)

  const clickHandler = async () => {
    try {
      const obj = await getRandomPokemon()
      return setPokemonObj(obj)
    } catch (err) {
      console.log('Err message: ' + err)
    }
  }

  return (
    <>
      <div className="flex-child ">
        <h2>Pika Pika</h2>
        <button onClick={clickHandler}>POKEMON</button>
        <br />
        <br />
        <div className="resize">
          {pokemonObj && (
            <img
              src={`${pokemonObj?.sprites.front_default}`}
              alt="Picture of a fox"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Pokemon
