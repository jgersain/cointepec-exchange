const url = 'https://api.coincap.io/v2'

// get assets
function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssets
}
