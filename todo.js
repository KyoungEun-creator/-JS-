const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');
const todos = [];

function saveTodos() {
    localStorage.setItem('todos', todos);
}

function deleteTodo(event) {
    const li = event.target.parentElement; //삭제하고 싶은 element(각 삭제버튼이 포함된 li)
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;  
    const button = document.createElement('button');    //삭제버튼
    button.innerText = '❌';
    button.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";     //작성 후 엔터 누르면 input안이 비어지도록
    todos.push(newTodo);    //입력받은 값을 array에 넣음
    paintTodo(newTodo);     
    saveTodos();            //입력받은 값을 브라우저에 저장
}

todoForm.addEventListener('submit', handleToDoSubmit);