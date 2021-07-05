const clock = document.querySelector("#clock");


function time(){
    /* const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds(); */
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${minute}:${second}`;
}
setTimeout(time,0); //웹브라우저 시작하자마자 
setInterval(time, 1000);