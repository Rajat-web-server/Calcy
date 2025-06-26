let a, b;

function num1() {
    a = prompt("num1 = ")
    return a;
}
function num2() {
    b = prompt("num2 = ")
    return b;
}

function operator() {
    let choose = prompt("Choose the operator");
    return choose;
}

function addition() {
    let c;
    c = a + b;
    console.log("The result is " + c)
}


function subtraction() {
    let c;
    c = a - b;
    console.log("The result is " + c);
}

function multiplication() {
    let c;
    c = a * b;
    console.log("The result is " + c);
}

function divide() {
    let c;
    c = a / b;
    console.log("The result is " + c);
}

function calculate() {
    switch (operator()) {
        case "+":
            addition();
            break;

        case "-":
            subtraction();
            break;

        case "*":
            multiplication();
            break;

        case "/":
            divide();
            break;

        default:
            console.log(error);

    }
}


