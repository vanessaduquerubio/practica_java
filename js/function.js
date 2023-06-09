// aqui creo las funciones

//capturar elementos del dom

const sectionTareas = document.querySelector('#tareas')
const addTitulo = document.querySelector('#floatingInputGrid')
const addPrioridad = document.querySelector('#floatingSelectGrid')
const addButton = document.querySelector('#buttonadd')
const searchPrioridad = document.querySelector('#floatingSelectGrid2')
const searchTarea = document.querySelector('#floatingInputGrid2')
const buttonSearch = document.querySelector('#buttonbuscar')
const deleteOneTarea = document.querySelector('btn btn-light')
const cardTarea = document.querySelector('card-body')
console.log(searchTarea.value)
console.log(searchPrioridad.value)
console.log(buttonSearch.value)
console.log(addButton)


//funciones borrar
function deleteItemArray(pList, pId) {

    let posicionBorrar = pList.findIndex(item => item.id === pId)
    if (posicionBorrar !== -1) {
        pList.splice(posicionBorrar, 1)
    }


}

function deleteItem(event, pList) {
    event.preventDefault()
    let id = parseInt(event.target.dataset.id)
    const tareaDelente = event.target.parentNode.parentNode
    tareaDelente.parentNode.removeChild(tareaDelente)
    deleteItemArray(tarea, id)
    if (pList.length === 0) {
        pDom.innerHTML = '<h2> no hay tareas pendientes</h2>'
    }

}
// fin funciones borrar


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
    button.addEventListener('click', deleteItem)
    button.textContent = `Eliminar`
    divPintado.append(p, button)
    divUrgencia.append(divPintado)
    sectionTareas.append(divUrgencia)
    pDom.append(divUrgencia)
}

function printAllTareas(pList, pDom) {
    pDom.innerHTML = "";
    pDom.innerText = '';
    if (pList.length !== 0) {
        pList.forEach(tarea => printOneTarea(tarea, pDom));
    } else {
        pDom.innerHTML = '<h2>No hay tareas pendientes</h2>'
    }


}
printAllTareas(tareas, sectionTareas)


//fin printTareas




//ncio pintat tareas dinamicamente


// guardar newTarea en tareas
function saveTarea(pLista, pTarea) {
    let duplicado = pLista.findIndex(tarea => tarea.titulo.toLowerCase() === '')
    if (duplicado === -1) {
        pLista.push(pTarea)
        return 'usuario guardado'
    } else {
        alert('tarea repetida')
    }

}


// evento que pinta las nuevas tareas

let i = 1;
function addTarea(event) {
    event.preventDefault();
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
    }

}
addButton.onclick = addTarea;
// fin pintar tareas dinamicamente


//inicio Buscar tareas dinamicamente
//inicio filtrar por categoria
function filterByPrioridad(pList, pPrioridad) {

    return pList.filter(tarea => tarea.prioridad.toLowerCase() === pPrioridad)

}

function changePrioridad() {
    let prioridad = searchPrioridad.value.toLowerCase();
    const filterPrioridad = filterByPrioridad(tareas, prioridad);
    printAllTareas(filterPrioridad, sectionTareas);

}

searchPrioridad.addEventListener('change', changePrioridad);

// funcion buscar por nombre

function filterByName(pList, pNombre) {
    const filterList = []
    for (let tarea of pList)
        if (tarea.titulo.toLowerCase().includes(pNombre.toLowerCase())) {
            filterList[filterList.length] = tarea;
            printAllTareas(filterList, sectionTareas)
            if (pList.length === 0) {
                pDom.innerHTML = "<h2> tareas completadas</h2>"
            }
        }
}


function sendSearch() {
    filterByName(tareas, searchTarea.value.toLowerCase())

}
buttonSearch.addEventListener('click', sendSearch)
