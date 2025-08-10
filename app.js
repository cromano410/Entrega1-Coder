const listaAlumnos = [];

const agregarAlumno = (nombre, edad) => {
    listaAlumnos.push({
        nombre: nombre,
        edad: edad,
    });
};

const mostrarAlumnos = () => {
    let lista = `\n----- Lista de alumnos -----\n`;
    for (let i = 0; i < listaAlumnos.length; i++) {
        lista += `
    - Nombre: ${listaAlumnos[i].nombre}
    - Edad: ${listaAlumnos[i].edad} años
        `;
    }
    console.log(lista);
};

let continuar = true;

while (continuar) {
    const nombre = prompt("Ingresa nombre del alumno");
    const edadString = prompt("Ingresa edad del alumno");
    const edad = parseInt(edadString);

    if (nombre && !isNaN(edad)) {
        agregarAlumno(nombre, edad);
    } else {
        alert("Datos inválidos");
    }

    
    const respuesta = prompt("¿Querés agregar otro alumno? (si/no)").toLowerCase();
    if (respuesta !== "si") {
        continuar = false;
    }
}

mostrarAlumnos();
