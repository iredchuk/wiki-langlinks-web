import request from 'superagent'

const apiBaseUrl = 'https://wiki-langlinks-api.now.sh'

async function fetchLangLinks ({ searchTerm, sourceLang, targetLangs }) {
  const res = await request
    .get(`${apiBaseUrl}/langlinks`)
    .query({
      search: searchTerm,
      source: sourceLang,
      target: targetLangs.join('|')
    })
    .accept('json')

  return res.body
}

export default {
  fetchLangLinks
}
