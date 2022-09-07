import request from 'superagent'

export async function getRanDomFox() {
  try {
    const resp = await request.get('https://randomfox.ca/floof/')
    return resp.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}
