import request from 'superagent'

export async function getRandomFox() {
  try {
    const resp = await request.get('https://randomfox.ca/floof/')
    return resp.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}
