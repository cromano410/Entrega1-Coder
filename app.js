const listaAlumnos = []


const agregarAlumno = (nombre, edad) => {
    listaAlumnos.push ({
        nombre: nombre,
        edad: edad,
    });
};

const mostrarAlumnos = () => {

    let lista = `     Lista de alumnos\n`;


for(let i=0; i < listaAlumnos.length; i++) {
    lista+=`
    - Nombre: ${listaAlumnos[i].nombre}
    - Edad: ${listaAlumnos[i].edad} años
    ` 
}

return console.log(lista)   
};

const nombre = prompt("ingresa nombre del alumno")
const edadString = prompt("ingresa edad del alumno")
const edad = parseInt(edadString)  

if (nombre && !isNaN(edad)) {
    agregarAlumno(nombre, edad);
    mostrarAlumnos();
}else {
    alert("datos invalidos")
}

//agregarAlumno("Carlos", 34);
//mostrarAlumnos() 


