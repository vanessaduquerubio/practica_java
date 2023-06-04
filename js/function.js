// aqui creo las funciones

//capturar elementos del dom

const sectionTareas = document.querySelector('#tareas')

//funcion que pinte una tarea en el dom

/* 
function printOneTarea(pTarea, pDom) {
    const divUrgencia = document.createElement('div');
    divUrgencia.classList.add('card')
    const divPintado = document.createElement('div')
    divPintado.classList.add('card-body');
    const pParrafo = document.createElement('p')
    pParrafo.textContent = '${ pTarea.titulo }'
    const button = document.createElement('button')
    button.classList.add('btn, btn-outline-danger')
    button.textContent = 'Eliminar'
    divPintado.append(p, button)
    divUrgencia.appendChild(divPintado)
    sectionTareas.appendChild(divUrgencia)
    pDom.appendChild(sectionTareas)
    console.log(divUrgencia)
}

// imprimir todas las tareas que hay en el array de datos;/*  */

function printOneTarea(pTarea, pDom, pList) {
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
    pList.forEach(tarea => printOneTarea(tarea, pDom, tareas));
}

printAllTareas(tareas, sectionTareas);

//añadir estilo por prioridad




