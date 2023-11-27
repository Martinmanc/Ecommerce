const product = JSON.parse(localStorage.getItem('products'));
const seccion = document.querySelector(".main-section");

if (product) {
    pintarProductos(product);
} else {
    console.error('No se encontraron productos en el almacenamiento local.');
}

function pintarProductos(arrayPintar) {
    seccion.innerHTML = '';

    arrayPintar.forEach((product, indiceActual) => {
        const fechaFormateada = new Date(product.date);

        seccion.innerHTML += `
            <article class="card">
                <header class="card-header">
                    <h3 class="nombre-producto">${product.name}</h3>
                    <img class="img-productos" src="${product.image}" alt="${product.name}">
                </header>
                <div class="div-info">
                    ${product.description}
                </div>
                <div class="div-fecha">${fechaFormateada.getDate()}/${fechaFormateada.getMonth() + 1}/${fechaFormateada.getFullYear()}</div>
                <div class="div-price">$${product.price}</div>
                <footer class="card-footer">
                    <button class="buttoms">
                        Ver mas
                    </button>
                    <button class="buttoms">
                        Comprar
                    </button>
                </footer>
            </article>`;
    });
}