const allBoxes = document.querySelectorAll('.box')
const allTasks = document.querySelectorAll('.div')

allTasks.forEach(task => {
    task.addEventListener('dragstart', () => {

        task.classList.add('is-dragging')

    })
    task.addEventListener('dragend', () => {
        task.classList.remove('is-dragging')
    })
})

allBoxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();

        const curTask = document.querySelector('.is-dragging')
        box.appendChild(curTask)
    })
})

const form = document.querySelector('#add-form')
const input = document.querySelector('#todo-input')
const todoBox = document.querySelector('#to-do')

form.addEventListener('submit', e => {
    e.preventDefault()

    const newTaskText = input.value;

    const newTask = document.createElement('div')
    newTask.classList.add('div')
    newTask.setAttribute('draggable', 'true')
    newTask.innerHTML = newTaskText

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('remove')
    deleteButton.textContent = 'x'

    newTask.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        newTask.remove()
    })

    newTask.addEventListener('dragstart', () => {
        newTask.classList.add('is-dragging')
    })
    newTask.addEventListener('dragend', () => {
        newTask.classList.remove('is-dragging')
    })
    todoBox.appendChild(newTask)
    input.value = '';

})

function registerClickHandler(e) {

    var target = e.target;
    target.parentNode.parentNode.removeChild(target.parentNode);
}

var removeBtn = document.querySelectorAll('.remove');

for (var i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", registerClickHandler, false);
}