// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Lista para almacenar los nombres que ya han sido sorteados
let listaSorteados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    let nombreAmigo = document.getElementById('amigo').value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombreAmigo);

    // Limpiar el campo de texto
    document.getElementById('amigo').value = "";

    // Actualizar la lista visual en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    let listaAmigosHTML = document.getElementById('listaAmigos');
    listaAmigosHTML.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer la lista de amigos y agregar cada uno a la lista visual
    listaAmigos.forEach(function(amigo) {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaAmigosHTML.appendChild(item);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaAmigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de sortear.");
        return;
    }

    // Verificar si todos los nombres ya han sido sorteados
    if (listaAmigos.length === listaSorteados.length) {
        alert("Todos los amigos ya han sido sorteados.");
        return;
    }

    // Seleccionar un nombre aleatorio de la lista que no haya sido sorteado
    let amigoSecreto;
    do {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        amigoSecreto = listaAmigos[indiceAleatorio];
    } while (listaSorteados.includes(amigoSecreto)); // Repetir si el nombre ya fue sorteado

    // Agregar el nombre sorteado a la lista de sorteados
    listaSorteados.push(amigoSecreto);

    // Mostrar el resultado del sorteo
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
