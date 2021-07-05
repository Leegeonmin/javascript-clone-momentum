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