document.addEventListener('DOMContentLoaded', function() {
  const bookList = document.getElementById('bookList');
  const cart = document.getElementById('cart');

  
  fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(data => {
      data.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('col-md-3');

        card.innerHTML = `
          <div class="card">
            <img src="${book.img}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">Prezzo: ${book.price}€</p>
              <button class="btn btn-danger mb-2" onclick="removeBook(this)">Scarta</button>
              <button class="btn btn-primary" onclick="addToCart('${book._id}', '${book.title}', ${book.price})">Compra ora</button>
            </div>
          </div>
        `;

        bookList.appendChild(card);
      });
    });

 
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `
      ${item.title} - ${item.price}€
      <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart('${item.id}')">Rimuovi</button>
    `;
    cart.appendChild(li);
  });

  window.addToCart = function(id, title, price) {
    const item = { id, title, price };
    cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  
    const li = document.createElement('li');
    li.id = id; 
    li.classList.add('list-group-item');
    li.innerHTML = `
      ${title} - ${price}€
      <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart('${id}')">Rimuovi</button>
    `;
    cart.appendChild(li);
  }

  window.removeFromCart = function(id) {
    const index = cartItems.findIndex(item => item.id === id);
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  
    const li = document.getElementById(id);
    if (li) {
      li.remove();
    }
  }

  window.removeBook = function(button) {
    const card = button.closest('.card');
    card.remove();
  }
});