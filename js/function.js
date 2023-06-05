// aqui creo las funciones

//capturar elementos del dom

const sectionTareas = document.querySelector('#tareas')
const addTitulo = document.querySelector('#floatingInputGrid')
const addPrioridad = document.querySelector('#floatingSelectGrid')
const addButton = document.querySelector('#buttonadd')

console.log(addTitulo.value)

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
    button.classList.add('btn-outline-')
    button.textContent = `Eliminar`
    divPintado.append(p, button)
    divUrgencia.append(divPintado)
    sectionTareas.append(divUrgencia)
    pDom.append(divUrgencia)
}

function printAllTareas(pList, pDom) {
    pList.forEach(tarea => printOneTarea(tarea, pDom));
}

printAllTareas(tareas, sectionTareas);

//fin printTareas

// asegurarnos que los campos no estan vacios
/* function comprobarForm(pForm) {
    return pForm.titulo.value !== "" && pForm.prioridad.value !== ""
}
 */
//crear funcion para comprobar que no está repetida
function saveTarea(pList, pTarea) {
    let duplicado = pList.findIndex(tarea => tarea.titulo === pTarea.titulo)
    if (duplicado === -1) {
        pList.push(pTarea);
        return 'usuario guardado';
    }
    return 'usuario duplicado'
}
//inicion addTareas, conseguir  el valor de addTitulo y de addPrioridad y enviarlo con un evento de clik en addButton

let id = 0;


function addTarea(event) {
    event.preventDefault();

    const newTarea = {
        idTarea: id,
        titulo: event.target.titulo.value,
        prioridad: event.target.prioridad.value,
    }
    console.log(newTarea)
    printOneTarea(newTarea, sectionTareas)
    let guardado = saveTarea(tareas, newTarea)
    return guardado
}


addButton.addEventListener('click', addTarea);
