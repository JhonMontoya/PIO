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
                <button onclick = "editUser(${user.id})"> Editar </button>
                <button onclick = "deleteUser(${user.id})"> Eliminar </button>
            </td>
            `;

            userList.appendChild(row);
        });
    } catch (error) {
        alert("Error al cargar la base de datos", error.message);
    }
}