export const fetchImage = () => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=1tfzjlOIYDaAuOUBR2Tw5LRAvteh2KPbVeqGpMQ2')
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching APOD')
      }
      return response.json()
    })
}