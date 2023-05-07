const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const link = document.querySelector('a');

function onLoginSubmit(event){
    // const username=loginInput.value;
    event.preventDefault(); // form의 기본동작(submit 하면 브라우저 새로고침 되는 것)을 실행하지 못하게 하기
    // console.log(username);
    // if (username === '') {
    //     alert('Please Write Your Name');
    // } else if (username.length>15) {
    //     alert('Your name is Too Long');
    // }
}

function handleLinkClick(event) {
    event.preventDefault();
    alert('clicked!');
}


loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLinkClick);