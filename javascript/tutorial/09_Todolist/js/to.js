const form = document.querySelector('.todo_form')
const input = document.querySelector('input')
const ul = document.querySelector('.todo_list')

let todos = []

function saveTodo(){
    localStorage.setItem('todos',json.strungify(todos))
}


function removeTodo(e){
    console.log(e)
    const li = e.target.parentNode
    li.remove()
    const newTodos = todos. filter(todo => todo.id !== parseInt(li.id))
    todos = newTodos
}

function paintTodo(text){
    console.log(text)

    const li = document.createElement('li')
    const span = document.createElement('span')

    li.innerText = text
    li.id = todos.length + 1
    span.innerText = 'x'
    span.addEventListener('click',removeTodo)

    li.appendChild(span)
    ul.appendChild(li)

    todos.push({
        id : todos.length + 1,
        text: text
    })

    saveTodo()
}

function handleSubmit(e){
    e.preventDefault()
    if(input.value ==='') return
    paintTodo(input.value)
    input.value = ''
}


function loadTodo(){
    const loadedTodos = localStorage.getItem('todos')
    
    if(loadedTodos !== null){
        const parseTodo = JSON. parse(loadedTodos)
        parseTodo.forEach(todo => paintTodo(todo.text))
    }

}

function init(){
    loadTodo()
    form.addEventListener('submit',handleSubmit)
}

init()