
// const buttons = document.querySelectorAll("button");

// buttons.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     dis.value += e.target.innerText; 
//   });
// });

// window.addEventListener("load", () => {
//     output.value = "";      // to stop the autcomplete value
// });
const output = document.querySelector("#display");

const value = document.querySelector(".click1");

let n1 ;
let n2 ;
let operation;
let result = null;
let isSecondNumber = false;


const sound = document.querySelector("#mouseClick");
const buttons = document.querySelectorAll("#btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        mouseClick.currentTime = 0;
        mouseClick.play()
    })
})
// const clickSound = new Audio('click.mp3');  
// clickSound.preload = 'auto'; 
const addSound = document.querySelector("#itemAdd").addEventListener('click', () => {
    mouseClick.currentTime = 0;
    mouseClick.play();
})


value.addEventListener("click", (e) => {
    console.log("one");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += e.target.innerText;
    // n1=1;
})

const value2 = document.querySelector(".click2");
value2.addEventListener("click", (e) => {
    console.log("two");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += "2";
    // n1=2;
})

const value3 = document.querySelector(".click3");
value3.addEventListener("click", (e) => {
    console.log("three");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += "3";
    // n1=3;
})

const del = document.querySelector(".clickC");
del.addEventListener("click", (e) => {
    console.log("Delete");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value = "";
    
})

const zero = document.querySelector(".click0");
zero.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += "0";
    // n=0;
})

const value4 = document.querySelector(".click4");
value4.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += "4";
    // n=4;
})

const value5 = document.querySelector(".click5");
value5.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += "5";
    // n=5;
})

const value6 = document.querySelector(".click6");
value6.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += "6";
    // n=6;
})

const value7 = document.querySelector(".click7");
value7.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += "7";
    // n=7;
})

const value8 = document.querySelector(".click8");
value8.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += "8";
    // n=8;
})

const value9 = document.querySelector(".click9");
value9.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += "9";
    // n=9;
})

const valuedot = document.querySelector(".dot");
valuedot.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    output.value += ".";
})

const operationPlus = document.querySelector(".add");
operationPlus.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    // output.value += " + ";
    operation="+";
    // operation="+";
})

const operationMultiply = document.querySelector(".multiply");
operationMultiply.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    // output.value += " x ";
    operation="x";

})

const operationDivide = document.querySelector(".divide");
operationDivide.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    // output.value += " ÷ ";
    operation="÷";
})

const operationPercent = document.querySelector(".percent");
operationPercent.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    // output.value += " % ";
    operation="%";
})

const operationMinus = document.querySelector(".minus");
operationMinus.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "black";
    output.style.fontSize = "40px";
    // output.value += " − ";
    operation="-";
})

// const operationSign= document.querySelector(".sign");
// operationSign.addEventListener("click",(e)=>{
//     if (output.value=" - ") {
//         output.value =" + ";
//     }
//     else if(output.value=" + "){
//         output.value=" - ";
//     }
// })
  

function gettingFirstnum(){
    if(!operation){
        n1=output.value;
        console.log("n1: "+ n1);
        output.value='';  
    }
}
function gettingSecondnum(){
    if(operation){
        n2=output.value;
        console.log("n2: "+ n2);
    }
}
switch (operation) {
  case '+':
    result = Number(n1) + Number(n2);
    break;

  case '-':
    result = Number(n1) - Number(n2);
    break;

  case 'x': // or '*'
    result = Number(n1) * Number(n2);
    break;

  case '÷': // or '/'
    result = Number(n1) / Number(n2);
    break;

  case '%':
    result = Number(n1) % Number(n2);
    break;

  default:
    console.log("Unknown operation");
}




