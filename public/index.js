console.log('CARGANDO...');

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const product = {
    title: document.getElementById('title').value,
    price: parseInt(document.getElementById('price').value),
    thumbnail: document.getElementById('thumbnail').value,
  }

  console.log(product);
  fetch('/api/products', {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
})