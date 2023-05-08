const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";          //string만 포함된 변수는 대문자로 쓰는 관습
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUsername = loginInput.value;  
    localStorage.setItem(USERNAME_KEY, typedUsername);
    paintGreetings(typedUsername);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    //show the greeting
    paintGreetings(savedUsername);
}
