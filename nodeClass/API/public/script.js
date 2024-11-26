//URL de la API
const API_URL = 'http://localhost:2500/usuarios';

//Seleccionamos los elementos del DOM

let editingUserId= null;

async function loadUser() {
    try {
        const response = await fetch(API_URL); //solicitud get a la url await se espera la respuesta del servidor
        const usuarios = await response.json();

        const userList = document.getElementById("user-list");
        userList.innerHTML = "";

        usuarios.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td> ${user.id} </td>
            <td> ${user.nombre} </td>
            <td> ${user.rol} </td>

            <td>
                <button type="button" class="btn btn-warning" onclick = "editUser(${user.id})"> Editar </button>
                <button type="button" class="btn btn-danger" onclick = "deleteUser(${user.id})"> Eliminar </button>
            </td>
            `;

            userList.appendChild(row);
        });
    } catch (error) {
        alert("Error al cargar la base de datos", error.message);
    }
}

async function saveUser(event) {
    event.preventDefault();

    const id = document.getElementById("user-id").value;
    const nombre = document.getElementById("user-name").value;
    const rol = document.getElementById("user-rol").value;

    if(!id || !nombre || !rol){
        alert('por favor, complete los campos obligatorios');
        return;
    }
    
    const usuario = {id: parseInt(id), nombre, rol};

    try {
        if(editingUserId){
            const response = await fetch(`${API_URL}/${editingUserId}`, {
                method: 'PUT',
                headers : {'Content-Type':'application/json'},
                body: JSON.stringify(usuario)
            });

            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message);
            }
            alert("Usuario actualizado correctamente");
            editingUserId=null;
        }
        else{
            const response = await fetch(API_URL, {
                method: 'POST',
                headers : {'Content-Type':'application/json'},
                body: JSON.stringify(usuario)
            });

            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message);
            }

            alert("usuario creado correctamente");
        }
        loadUser();
        
    } catch (error) {
        alert("Error al cargar el usuario" + error.message);
    }
    document.getElementById("user-form").reset();
}

function editUser(id){
    const usuario = Array.from(document.querySelectorAll("#user-list tr")).find(row=>{
        return parseInt(row.children[0].textContent) === id;
    });

    if(usuario){
        document.getElementById('user-id').value = usuario.children[0].textContent;
        document.getElementById('user-name').value = usuario.children[1].textContent;
        document.getElementById('user-rol').value = usuario.children[2].textContent;

        editingUserId = id;
    }
}

async function deleteUser(id) {

    if(!confirm('Esta seguro que desea eliminar al usuario')) return;

    try {
        const response = await fetch (`${API_URL}/${id}`,{
            method: "DELETE",
        });

        if(!response.ok){
            const error = await response.json();
            throw new Error(error.message);
        }

        alert("usuario eliminado correctamente");
        loadUser();

    } catch (error) {
        alert("Error al eliminar el usuario: ", error.message);
    }
}

document.getElementById("user-form").addEventListener('submit',saveUser);
loadUser();

setInterval(loadUser, 20000);