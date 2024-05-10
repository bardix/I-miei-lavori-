// riempie lo span "year"
document.getElementById('year').innerText = new Date().getFullYear()

// riempiamo la riga con gli eventi
// https://striveschool-api.herokuapp.com/api/product/

const generateConcertCards = function (concertsArray) {
  const row = document.getElementById('events-row')
  concertsArray.forEach((phone) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col')
    newCol.innerHTML = `
      <div class="card h-100 d-flex flex-column">
        <img src="${phone.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${phone.name}</h5>
          <p class="card-text">${phone.description}</p>
          <p class="card-text">${phone.brand}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">${phone.price}€</button>
            <a href="dettagli_5.html?eventId=${phone._id}" class="btn btn-info">INFO</a>
          </div>
        </div>
      </div>
      `
    row.appendChild(newCol)
  })
}

const getEvents = function () {
  //  recuperiamo la lista di eventi attualmente nel database
  fetch('https://striveschool-api.herokuapp.com/api/product/', {
        
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZWQxNjgxODQ0MjAwMTUzNzU5MzYiLCJpYXQiOjE3MTUzMzQ0MjMsImV4cCI6MTcxNjU0NDAyM30.h2nBZNYm54j5Hx3S7EuFnVXZhR1l84exsmepD6A1C54"
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
    .then((array) => {
      console.log('ARRAY!', array)
      // creiamo le card per la landing page
      generateConcertCards(array)
    })
    .catch((err) => {
      console.log('ERRORE!', err)
    })
}

getEvents()
