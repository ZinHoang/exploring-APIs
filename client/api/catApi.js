import request from 'superagent'

export async function getRandomCat() {
  try {
    const res = await request.get(
      `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_KEY}`
    )
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}
