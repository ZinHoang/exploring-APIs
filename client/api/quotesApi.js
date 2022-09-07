import request from 'superagent'

export async function getQuote() {
  try {
    const res = await request.get('/api/quote') //this will hit server.js

    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}
