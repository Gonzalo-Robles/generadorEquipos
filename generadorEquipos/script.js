let personas = [];
let equipos = [];

function agregarPersona() {
    const nombre = document.getElementById('nombre').value;
    const nivel = parseInt(document.getElementById('nivel').value, 10);

    if (nombre.trim() !== "" && !isNaN(nivel) && nivel >= 1 && nivel <= 99) {
        const numeroIngreso = personas.length + 1;
        personas.push({ numeroIngreso, nombre, nivel });
        actualizarListaPersonas();
        document.getElementById('nombre').value = "";
        document.getElementById('nivel').value = "";
    } else {
        alert("Por favor, ingrese un nombre válido y un nivel entre 1 y 99.");
    }
}

function actualizarListaPersonas() {
    const listaPersonas = document.getElementById('listaPersonas');
    listaPersonas.innerHTML = "";
    
    personas.forEach(persona => {
        const listItem = document.createElement('li');
        listItem.textContent = `${persona.numeroIngreso}. ${persona.nombre} (Nivel: ${persona.nivel})`;
        listaPersonas.appendChild(listItem);
    });
}

function generarEquipos() {
    const cantidadEquipos = parseInt(document.getElementById('cantidadEquipos').value, 10);

    if (personas.length < cantidadEquipos * 2) {
        alert("Ingrese al menos la cantidad necesaria de personas para formar equipos.");
        return;
    }

    personas = personas.sort((a, b) => a.nivel - b.nivel);

    equipos = Array.from({ length: cantidadEquipos }, () => []);

    personas.forEach((persona, index) => {
        const equipoIndex = index % cantidadEquipos;
        equipos[equipoIndex].push(persona);
    });

    mostrarEquipos();
}

function mostrarEquipos() {
    const equiposContainer = document.getElementById('equipos');
    equiposContainer.innerHTML = "";

    equipos.forEach((equipo, index) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `Equipo ${index + 1}: ${equipo.map(persona => `${persona.nombre} (Nivel: ${persona.nivel})`).join(', ')}`;
        equiposContainer.appendChild(paragraph);
    });
}
