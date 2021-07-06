# Todo앱 Momentum clone coding  
<br/>

> ### html, css, javascript를 이용한 Todo앱 기능 구현  
<br/><br/>
 
![momentum](https://user-images.githubusercontent.com/74194550/124526143-d5204d00-de3c-11eb-9fa5-8975b77feb69.jpg)
<br/>
> 위 이미지를 따라할 예정입니다

<br/><br/><br/><br/><br/><br/>

# 구현기능
<br/>

- ### __시계__
```javascript
const clock = document.querySelector("#clock");
    function time(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${minute}:${second}`;
}
setTimeout(time,0); //웹브라우저 시작하자마자 
setInterval(time, 1000);
```
```
Date()로 날짜를 가져오고 
padStart로 단위가 두자리수가 아니면 0을 채워넣게하고
setInterval로 1000ms마다 한번씩 해당함수를 호출하도록 하였다.
다만 웹페이지를 실행하고 1초뒤부터 시간이 나오는 문제가 있어 setTimeout으로 바로 time함수를 실행해 문제를 해결하였다.
```

<br/><br/><br/><br/>

- ### __로그인__
```javascript
const index_loginform = document.querySelector("#index_loginform");
const index_input = document.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const NAME = "name";
const name = localStorage.getItem(NAME);


function submit(event){
    event.preventDefault();     //Submit시 화면이 새로고침되는 것을 막기위해
    const username = index_input.value;
    localStorage.setItem(NAME, username);  //새로고침 시 입력한 name이 초기화 되는 문제를 해결하기 위해
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
```
```css
.hidden{
 display: none;  //  -----------> in css
}

```
```
새로고침시 등록한 이름이 초기화 되는 문제를 해결하기 위해 localStorage에 따로 저장을 하였고
login form과 로그인 시 나타나는 greeting form을 모두 hidden 클래스를 이용하여 숨겨둔 뒤
localStorage에서 user가 등록이 되어있다면 greeting form을, 되어있지않다면 login form을 노출시키도록 하였다.
```
<br/><br/><br/><br/>

- ### __Todo리스트 추가, 삭제__
```javascript
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
let array = [];
const TODOS_KEY = "todos";

function painttodo(value){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = value.id;
    li.appendChild(span);
    span.innerText = value.text;
    li.appendChild(button);
    button.innerText = "X";
    todoList.appendChild(li);
    li.classList.add("list-list");
    span.classList.add("list-span");
    button.addEventListener("click", deletetodo); // X눌렀을 시 event handle

}
function hadletodosubmit(e){
    e.preventDefault();
    const val = todoForm.querySelector("input").value;
    todoForm.querySelector("input").value = "";
    const valobj = {text : val,
                    id : Date.now(),
                };
    array.push(valobj);
    painttodo(valobj);  // html에 element추가
    savetodos();  //  local storage에 array 저장
}

function deletetodo(e){
    e.preventDefault();
    const deletelist = e.target.parentElement;
    const id = deletelist.id;
    deletelist.remove();
    array = array.filter((toDo) => {
        if(toDo.id !== Number(id)){
            return true
        }else{
            return false;
        }});
    savetodos();

}

function savetodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(array));
}



todoForm.addEventListener("submit", hadletodosubmit); // submit button click

const todos = localStorage.getItem(TODOS_KEY);


if(todos !== null){
    const parsetodos = JSON.parse(todos);
    parsetodos.forEach((item) =>  painttodo(item) // local storage에 있는 array를 가져와 html로 표시
    );
    array = parsetodos;
}
```
```
문제 : form에서 입력을 받아 html에 표시해도 저장을 못해 새로고침 하면 초기화
해결 : array 배열을 만들고 localstorage에 JSON.stringify로 JSON문자열로 저장 후 호출
문제 : 삭제 버튼 클릭 시 html에서만 사라지고 새로고침 하면 그대로 표시
해결 : 각 todo의 li마다 id를 부여해 삭제할 id와 비교하여 array를 재정의하고 localstorage에 저장
```
<br/><br/><br/><br/>

- ### __명언__
```javascript
const quotes = [
    {quotes: "삶이 있는 한 희망은 있다",  
     author: "키케로" },
     {quotes: "산다는것 그것은 치열한 전투이다",
     author: "로망로랑"},
     {quotes: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
     author: "사무엘존슨"},
            {quotes:  "언제나 현재에 집중할수 있다면 행복할것이다",
                author: "파울로 코엘료"},
                {quotes: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
                    author: "찰리 채플린"}
];

const num = Math.floor(Math.random() * quotes.length);

const quote = document.querySelector("#quotes-quote");
const author = document.querySelector("#quotes-author")


quote.innerText = quotes[num].quotes;
author.innerText = `- ${quotes[num].author}`;
```

```
quotes리스트에 quotes, author을 가지는 object를 저장하고 랜덤으로 명언을 전달하도록 하였따.
```

<br/><br/><br/><br/>

- ### __날씨알림__
```javascript
const API_KEY = "16943c9acde8730cf4d24e3d355b4b00";

function success(loc){

    const lat = loc.coords.latitude ;
    const longt = loc.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;
    });
}

function fail(loc){
    alert("Can't access your location");
}

navigator.geolocation.getCurrentPosition(success, fail);

```
```
openweathermap 에서 api를 json으로 받아 안의 데이터에서 날씨와 위치 정보를 추출하였다.
```
