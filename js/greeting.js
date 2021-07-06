 /* const h1 = document.querySelector(".divclass h1");

//querySelector, querySelectorAll 요소를 한개 가져오냐 전부가져오냐 차이(객체로 가져오나 객체배열로 가져오나)

function handleTitleClick(){
    const clickedClass = "active";
    /*if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    } == toggle
    h1.classList.toggle(clickedClass);

}
h1.addEventListener("click", handleTitleClick);  handleTitleClick()와 handleTitleClick의 차이 : event가 발생 시 function이 동작하기 원함 -> () x
                                                    function을 바로 실행시키고 싶다 -> () o / 괄호가 있어야 함수를 호출 없으면 그 시점에 호출되는 것이 아님 변수처럼 생각 함수를 js에 넘겨줌

 function handleTitleenter(){
    console.log("neis");
}
title.addEventListener("mouseenter", handleTitleenter);


title.onclick = handleTitleClick;

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize); 


string의 경우 const 변수에 저장하는 습관 -> error의 원인을 찾기쉬움 */




//=====================================================


/*
const loginform = document.querySelector("#index_loginform");
const logininput = document.querySelector("#index_loginform input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const NAME = "name";
function loginsubmit(event){
    event.preventDefault();   // html이 기본적으로 수행하는 것들을 off
    //const name = logininput[0].value;
    //console.dir(event.defaultPrevented);
    const name = logininput.value;
    localStorage.setItem(NAME, name);
    loginform.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);

    greeting.innerText = `hello ${NAME}`;
    
}

const savedname = localStorage.getItem(NAME);

if(savedname === null){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit", loginsubmit);
}else{
    greeting.innerText = `hello ${NAME}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
*/

// ===================================================

const index_loginform = document.querySelector("#index_loginform");
const index_input = document.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const NAME = "name";
const name = localStorage.getItem(NAME);


function submit(event){
    event.preventDefault();
    const username = index_input.value;
    localStorage.setItem(NAME, username);
    index_loginform.classList.add(HIDDEN_CLASSNAME);
    greet(username);

}

function greet(name){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `안녕하세요 ${name}님`;
}

if(localStorage.getItem(NAME) === null){
    index_loginform.classList.remove(HIDDEN_CLASSNAME);
    index_loginform.addEventListener("submit", submit);
}else{
    greet(name);
}
