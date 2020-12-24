const url = 'https://api.coincap.io/v2'

// get 20 main assets
function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

// get an asset
function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssets,
  getAsset
}
