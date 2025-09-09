// let a, b;

// function num1() {
//     a = prompt("num1 = ")
//     return a;
// }
// function num2() {
//     b = prompt("num2 = ")
//     return b;
// }

// function operator() {
//     let choose = prompt("Choose the operator");
//     return choose;
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
//}
// const buttons = document.querySelectorAll("button");

// buttons.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     dis.value += e.target.innerText; 
//   });
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
    // output.style.color = "white";
    // output.style.fontSize = "40px";
    output.value += "3";
})

const del = document.querySelector(".clickC");
del.addEventListener("click", (e) => {
    console.log("Delete");
    output.value = "";
})

const zero = document.querySelector(".click0");
zero.addEventListener("click", (e) => {
    console.log("zero");
    output.value += "0";
})

const value4 = document.querySelector(".click4");
value4.addEventListener("click", (e) => {
    console.log("zero");
    output.value += "4";
})

const value5 = document.querySelector(".click5");
value5.addEventListener("click", (e) => {
    console.log("zero");
    output.value += "5";
})

const value6 = document.querySelector(".click6");
value6.addEventListener("click", (e) => {
    console.log("zero");
    output.value += "6";
})

const value7 = document.querySelector(".click7");
value7.addEventListener("click", (e) => {
    console.log("zero");
    output.value += "7";
})

const value8 = document.querySelector(".click8");
value8.addEventListener("click", (e) => {
    console.log("zero");
    output.value += "8";
})

const value9 = document.querySelector(".click9");
value9.addEventListener("click", (e) => {
    console.log("zero");
    output.value += "9";
})

const valuedot = document.querySelector(".dot");
valuedot.addEventListener("click", (e) => {
    console.log("zero");
    output.value += ".";
})

const operationPlus = document.querySelector(".add");
operationPlus.addEventListener("click", (e) => {
    console.log("zero");
    output.value += " + ";
})

const operationMultiply = document.querySelector(".multiply");
operationMultiply.addEventListener("click", (e) => {
    console.log("zero");
    output.value += " x ";
})

const operationDivide = document.querySelector(".divide");
operationDivide.addEventListener("click", (e) => {
    console.log("zero");
    output.value += " ÷ ";
})

const operationPercent = document.querySelector(".percent");
operationPercent.addEventListener("click", (e) => {
    console.log("zero");
    output.value += " % ";
})

const operationMinus = document.querySelector(".minus");
operationMinus.addEventListener("click", (e) => {
    console.log("zero");
    output.value += " − ";
})

window.addEventListener("load", () => {
    output.value = "";
});








