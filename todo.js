const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');
let todos = [];     //업데이트 가능
const TODOS_KEY = "todos";


function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));     //string 만듦
}

function deleteTodo(event) {
    const li = event.target.parentElement; //삭제하고 싶은 element(각 삭제버튼이 포함된 li)
    li.remove();
    todos = todos.filter((todos)=>todos.id !== parseInt(li.id));    //li.id는 string이므로 num으로 만들어줌
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text ;  
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
    const newTodoObj = {
        id:Date.now(),
        text:newTodo,
    }
    todos.push(newTodoObj);    //입력받은 값을 array에 넣음
    paintTodo(newTodoObj);     
    saveTodos();            //입력받은 값을 브라우저에 저장
}

todoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {      //값이 존재한다면
    const parsedTodos = JSON.parse(savedTodos);     //JS가 사용가능한 object로 만듦
    todos = parsedTodos;        //localStorage에서 발견되는 이전의 todo들 포함하도록 
    parsedTodos.forEach(paintTodo);
}