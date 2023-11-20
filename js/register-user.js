const usersArray = JSON.parse(localStorage.getItem("users"))

const searchInput = document.querySelector('#search')
const userForm = document.querySelector("form#user-form")
const submitBtn = userForm.querySelector('button[type=submit].btn-form')


userForm.addEventListener("submit", (evt) => {

    evt.preventDefault()

    const el = evt.target.elements;

    if (el.password.value !== el.password2.value) {
        alert(`Las contraseñas no coiciden`)
        return;
    }

    const emailExist = usersArray.find((user) => {
        if (user.email === el.email.value) {
            return true
        }
    })

    if (emailExist && el.id.value !== emailExist.id) {
        Swal.fire({
            title: 'El correo ya existe',
            icon: 'error'
        })
        return
    }

    const id = el.id.value ? el.id.value : crypto.randomUUID()

    const user = {
        fullname: el.nombreCompleto.value,
        age: el.age.valueAsNumber,
        email: el.email.value,
        password: el.password.value,
        active: true,
        bornDate: new Date(el.bornDate.value).getTime(),
        location: el.location.value,
        id: id,
        image: el.image.value,
        role: 'CLIENT_ROLE'
    }

    if (el.id.value) {
        const indice = usersArray.findIndex(usuario => {

            if (usuario.id === el.id.value) {
                return true
            }
        })

        usersArray[indice] = user

        Swal.fire({
            title: 'Usuario Editado',
            text: 'Los datos del usuario fueron actualizados correctamente',
            icon: 'success',
            timer: 1000
        })
    } else {
        
        usersArray.push(user)
        Swal.fire({
            title: 'Usuario Agregado',
            text: 'Usuario se creo correctamente',
            icon: 'success',
            timer: 1000
        })
    }
    actualizarLocalStorage()
    resetearFormulario()
})

function resetearFormulario() {

    userForm.reset()
    userForm.elements.password.disabled = false;
    userForm.elements.password2.disabled = false;
    submitBtn.classList.remove('btn-edit') 
    submitBtn.innerText = 'Agregar usuario' 
    userForm.elements.nombreCompleto.focus()
}

function actualizarLocalStorage() {
    localStorage.setItem("users", JSON.stringify(usersArray))

}

function borrarUsuario(ID, nombre) {

    const confirmDelete = confirm(`Realmente desea borrar este usuario ${nombre}`)

    if (confirmDelete) {
        const indice = usersArray.findIndex(user => user.id === ID)

        usersArray.splice(indice, 1)
        pintarUsuarios(usersArray)
        actualizarLocalStorage()

    }

}

function editarUsuario(idBuscar) {
    const userEdit = usersArray.find((usuario) => {

        if (usuario.id === idBuscar) {
            return true
        }
    })
    if (!userEdit) {
        Swal.fire('Error al editar', 'No se pudo editar el usuario', 'error')
        return
    }

    console.log(userEdit)

    const el = userForm.elements;

    el.id.value = userEdit.id;
    el.age.value = userEdit.age
    el.nombreCompleto.value = userEdit.fullname
    el.email.value = userEdit.email;
    el.image.value = userEdit.image;
    el.location.value = userEdit.location;
    el.active.checked = userEdit.active;
    el.password.value = userEdit.password;
    el.password.disabled = true
    el.password2.value = userEdit.password;
    el.password2.disabled = true
    el.bornDate.value = formatInputDate(userEdit.bornDate)

    submitBtn.classList.add('btn-edit');
    submitBtn.innerText = 'Editar usuario'
}
