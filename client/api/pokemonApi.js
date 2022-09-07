import request from 'superagent'

export async function getRandomPokemon() {
  // Cannot go over 905
  const randomNumber = Math.floor(Math.random() * 905)

  const req = await request.get(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
  )
  return req.body
}
