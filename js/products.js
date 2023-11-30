const productsArray = JSON.parse(localStorage.getItem("products"))
const tableBody = document.getElementById('table-body')
const searchInput = document.querySelector('#search')
const productForm = document.querySelector('.products-form')
const submitBtn = document.querySelector('.btn-form');

productForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    const el = evt.target.elements;

    const id = el.id.value ? el.id.value : crypto.randomUUID()

    const product = {
        name: el.name.value,
        date: new Date(el.date.value).getTime(),
        image: el.image.value,
        price: el.price.valueAsNumber,
        description: el.description.value,
        id: id,
        section : el.section.value,
    }

    if (el.id.value) {
        const indice = productsArray.findIndex(producto => {
            if (producto.id === el.id.value) {
                return true
            }
        })

        productsArray[indice] = product;

        Swal.fire({
            title: 'Producto Editado',
            text: 'Los datos del Producto fueron actualizados correctamente',
            icon: 'success',
            timer: 1000
        })
    } else { 
        productsArray.push(product);
        Swal.fire({
            title: 'Producto Agregado',
            text: 'Producto se creo correctamente',
            icon: 'success',
            timer: 1000
        })
    }
    pintarProductos(productsArray)
    actualizarLocalStorage()
    resetearFormulario()
})

function resetearFormulario() {
    productForm.reset()
    submitBtn.classList.remove('btn-edit') 
    submitBtn.innerText = 'Agregar producto' 
    productForm.elements.name.focus()
}

searchInput.addEventListener('keyup', (eventito) => {
    const inputValue = eventito.target.value.toLowerCase();
    const productosFiltrados = productsArray.filter(producto => {

        const nombre = producto.name.toLowerCase();
        if (nombre.includes(inputValue)) {
            return true
        }
        return false
    })
    pintarProductos(productosFiltrados)
})

pintarProductos(productsArray);

function pintarProductos(arrayPintar) { 
    tableBody.innerHTML = '';

    arrayPintar.forEach((product, indiceActual) => {

        const date = new Date(product.date);
        date.setDate(date.getDate() + 1);
        const formattedDate = formatDate(date);

        tableBody.innerHTML += `
        <tr class="table-row">
            <td class="product-image">
                <img src="${product.image}" alt="${product.name} imagen">
            </td>
            <td class="product-name">${product.name}</td>
            <td class="product-description">${product.description}</td>
            <td class="product-date">${formattedDate}</td>
            <td class="product-price">${"$" + product.price}</td>

            <td>
                <button class="action-btn btn-danger" title="Borrar producto" 
                        onclick="borrarProducto('${product.id}', '${product.name}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button class="action-btn" 
                        title="Editar producto"
                        onclick="editarProducto(${product.id})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </td>
        </tr>`;
    });
}

function actualizarLocalStorage() {
    localStorage.setItem("products", JSON.stringify(productsArray))
}

function borrarProducto(ID, nombre) {

    const confirmDelete = confirm(`Realmente desea borrar este producto ${nombre}`)

    if (confirmDelete) {
        const indice = productsArray.findIndex(user => user.id === ID)

        productsArray.splice(indice, 1)
        pintarProductos(productsArray)
        actualizarLocalStorage()
    }
}

function editarProducto(idBuscar) {
    const productEdit = productsArray.find((producto) => {
        if (producto.id === idBuscar) {
            return true
        }
    })
    if (!productEdit) {
        Swal.fire('Error al editar', 'No se pudo editar el producto', 'error')
        return
    }

    const el = productForm.elements;

    el.id.value = productEdit.id;
    el.name.value = productEdit.name;
    el.image.value = productEdit.image;
    el.price.value = productEdit.price;
    el.description.value = productEdit.description;
    el.date.value = new Date(productEdit.date).toISOString().split('T')[0];
    el.section.value = productEdit.section;

    submitBtn.classList.add('btn-edit');
    submitBtn.innerText = 'Editar producto'
}
actualizarLocalStorage();
pintarProductos(productsArray);
