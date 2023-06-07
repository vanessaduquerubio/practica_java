// aqui creo las funciones

//capturar elementos del dom

const sectionTareas = document.querySelector('#tareas')
const addTitulo = document.querySelector('#floatingInputGrid')
const addPrioridad = document.querySelector('#floatingSelectGrid')
const addButton = document.querySelector('#buttonadd')
const searchPrioridad = document.querySelector('#floatingSelectGrid2')
const searchTarea = document.querySelector('#floatingInputGrid2')
const buttonSearch = document.querySelector('#buttonbuscar')
console.log(searchTarea.value)
console.log(searchPrioridad.value)
console.log(buttonSearch.value)
console.log(addButton)


//funcion que pinte una tarea en el dom
function printOneTarea(pTarea, pDom) {
    const divUrgencia = document.createElement('div');
    divUrgencia.classList.add('card')
    const divPintado = document.createElement('div')
    divPintado.classList.add(`${pTarea.prioridad}`)
    divPintado.classList.add('card-body');
    const p = document.createElement('p')
    p.textContent = pTarea.titulo
    const button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-outline-light')
    button.textContent = `Eliminar`
    divPintado.append(p, button)
    divUrgencia.append(divPintado)
    sectionTareas.append(divUrgencia)
    pDom.append(divUrgencia)
}

function printAllTareas(pList, pDom) {
    pList.forEach(tarea => printOneTarea(tarea, pDom));
}

/* printAllTareas(tareas, sectionTareas); */

//fin printTareas


//incio pintat tareas dinamicamente
function comprobarForm(pForm) {
    return pForm.addTitulo.value !== "" && pForm.addPrioridad.value !== ""
}

// guardar newTarea en tareas
function saveTarea(pLista, pTarea) {
    pLista.push(pTarea)
    return 'usuario guardado'
}


// evento que pinta las nuevas tareas
addButton.onclick = addTarea;
let i = 1;
function addTarea(event) {
    {
        const newTarea = {
            idTarea: i++,
            titulo: addTitulo.value,
            prioridad: addPrioridad.value
        }

        let guardado = saveTarea(tareas, newTarea)
        if (guardado === 'usuario guardado') {
            addTitulo.value = ""
            addPrioridad.value = ""
            printOneTarea(newTarea, sectionTareas)
        } else {
            alert('los campos no pueden estar vacios')
        }

    }
}
// fin pintar tareas dinamicamente


//inicio Buscar tareas dinamicamente
// funcion de filtro de prioridad

function filterByPrioridad(pList, pPrioridad, pNombre) {
    pList.forEach(tarea => {
        if (tarea.prioridad === pPrioridad && tarea.titulo.toLowerCase() === pNombre.toLowerCase()) {
            printOneTarea(tarea, sectionTareas)
            /*   } else if (tarea.titulo.toLowerCase() === pNombre.toLowerCase()) {
                  printOneTarea(tarea, sectionTareas)
              } else {
                  /*    alert('No hay ninguna tarea con esas características') */
        }
    })
}




// funcion que al presionar enter filtre las tareas
buttonSearch.onclick = sendSearch;
function sendSearch() {
    filterByPrioridad(tareas, searchPrioridad.value, searchTarea.value)
}
