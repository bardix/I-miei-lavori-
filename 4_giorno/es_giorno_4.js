// riempie lo span "year"
document.getElementById('year').innerText = new Date().getFullYear()

// riempiamo la riga con gli eventi
// https://striveschool-api.herokuapp.com/api/agenda


const unpackObj = function (arrayimmagini) {
    
    arrayimmagini = [...arrayimmagini.photos];
    console.log(arrayimmagini);
    generateimg(arrayimmagini);

}




const generateimg = function (arrayimmagini) {
  const row = document.getElementById('events-row')
  arrayimmagini.forEach((immagine) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col')
    newCol.innerHTML = `
      <div class="card h-100 d-flex flex-column">
        <img src="${immagine.src.original}" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${immagine.alt}</h5>
          <p class="card-text">${immagine.photographer}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">Hide</button>
            <a href="" class="btn btn-info">INFO</a>
          </div>
        </div>
      </div>
      `
    row.appendChild(newCol)
  })
}

const getEvents = function () {
  //  recuperiamo la lista di eventi attualmente nel database
  fetch('https://api.pexels.com/v1/search?query=mountain',{
    headers:{
        Authorization:"UNQ7Mtb4CzuBrv0Okqn7izwQxVhfRqOAhExqo5vdIvlyHeCExhbqyyw1"
    }

  })
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json()
      } else {
        throw new Error('Errore nella risposta del server')
      }
    })
    .then((obj) => {
      console.log('ARRAY!', obj)
      // creiamo le card per la landing page
      unpackObj(obj)
    })
    .catch((err) => {
      console.log('ERRORE!', err)
    })
}

getEvents()