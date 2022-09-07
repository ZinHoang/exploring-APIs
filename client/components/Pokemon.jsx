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
      <div className="flex-child pokemon">
        <h2>Pika Pika Pikachu</h2>
        <button onClick={clickHandler} className="pokemon">
          POKEMON
        </button>
        <br />
        <br />
        {pokemonObj && (
          <img
            className="img-pokemon"
            src={`${pokemonObj?.sprites.front_default}`}
            alt="Picture of a Pokemon"
          />
        )}
      </div>
    </>
  )
}

export default Pokemon
