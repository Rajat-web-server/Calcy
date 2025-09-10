
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
value.addEventListener("click", (e) => {
    console.log("one");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += e.target.innerText;
})

const value2 = document.querySelector(".click2");
value2.addEventListener("click", (e) => {
    console.log("two");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += "2";
})

const value3 = document.querySelector(".click3");
value3.addEventListener("click", (e) => {
    console.log("three");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += "3";
})

const del = document.querySelector(".clickC");
del.addEventListener("click", (e) => {
    console.log("Delete");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value = "";
})

const zero = document.querySelector(".click0");
zero.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += "0";
})

const value4 = document.querySelector(".click4");
value4.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += "4";
})

const value5 = document.querySelector(".click5");
value5.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += "5";
})

const value6 = document.querySelector(".click6");
value6.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += "6";
})

const value7 = document.querySelector(".click7");
value7.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += "7";
})

const value8 = document.querySelector(".click8");
value8.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += "8";
})

const value9 = document.querySelector(".click9");
value9.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += "9";
})

const valuedot = document.querySelector(".dot");
valuedot.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += ".";
})

const operationPlus = document.querySelector(".add");
operationPlus.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += " + ";
})

const operationMultiply = document.querySelector(".multiply");
operationMultiply.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += " x ";
})

const operationDivide = document.querySelector(".divide");
operationDivide.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += " ÷ ";
})

const operationPercent = document.querySelector(".percent");
operationPercent.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += " % ";
})

const operationMinus = document.querySelector(".minus");
operationMinus.addEventListener("click", (e) => {
    console.log("zero");
    output.style.color = "white";
    output.style.fontSize = "40px";
    output.value += " − ";
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

const operationEqual = document.querySelector(".equal").addEventListener("click",(e)=>{
    // let a, b;

// function num1() {
//     a = 
//     return a;
// }
// function num2() {
//     b = 
//     return b;
// }

// function operator() {
    
// }

// function addition() {
//     let c;
//     c = a + b;
//     console.log("The result is " + c)
// }


// function subtraction() {
//     let c;
//     c = a - b;
//     console.log("The result is " + c);
// }

// function multiplication() {
//     let c;
//     c = a * b;
//     console.log("The result is " + c);
// }

// function divide() {
//     let c;
//     c = a / b;
//     console.log("The result is " + c);
// }

// function calculate() {
//     switch (operator()) {
//         case "+":
//             addition();
//             break;

//         case "-":
//             subtraction();
//             break;

//         case "*":
//             multiplication();
//             break;

//         case "/":
//             divide();
//             break;

//         default:
//             console.log(error);

//     }
// }
})

const sound=document.querySelector("#mouseClick");
const buttons=document.querySelectorAll("#btn");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        mouseClick.currentTime=0;
        mouseClick.play()
    })
})








