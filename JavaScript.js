let Output = document.querySelector(".Output");
let clearButton = document.querySelector(".Clear");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let decimalButton = document.querySelector(".decimal");
let equal = document.querySelector(".equal")

Output.textContent = '';

let firstNumber = '';
let decimal = '';
let operator = '';
let secondNumber = '';

let displayValue = '';

numberButtons.forEach(function(number) {
    number.addEventListener('click', function() {
       if(operator === '') {
       firstNumber += number.textContent;
        displayValue = firstNumber;
       } else {
       secondNumber += number.textContent;
        displayValue = secondNumber;
       }
       console.log(firstNumber, operator,secondNumber)
    
       UpdateDisplay();
    })
})

operatorButtons.forEach(function(button) {
    button.addEventListener('click', function(){
        if(operator === '' && firstNumber !== '') {
            operator = button.textContent;
            displayValue += operator;
            UpdateDisplay();
        } else if (firstNumber === '') {
            alert("you need to enter a number first")
        }
        
    })
})

decimalButton.addEventListener('click', function() {
    if(firstNumber !== '' && decimal === '') {
        decimal = decimalButton.textContent;
       firstNumber += decimal;
        displayValue += decimal;
        UpdateDisplay();
    } 
})

equal.addEventListener('click', function() {
 if (firstNumber !== '' && secondNumber !== '' && operator !== ''){
    let result = operate(parseInt(firstNumber),operator, parseInt(secondNumber));

    firstNumber = result
    
    displayValue = result

    secondNumber = '';
    operator = '';
    decimal = '';
 }
   UpdateDisplay();
})

clearButton.addEventListener('click', clearDisplay)

function clearDisplay() {
   displayValue = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
    UpdateDisplay();
}

function UpdateDisplay() {
    Output.textContent = displayValue;
}

function operate(a, operator,b) {
switch(operator) {
    case "+":
        return add(a,b);
        break;
    case "-": 
        return substract(a,b);
    break;
    case"x":
        return multiply(a,b);
        break;
    case"/":
    if(b == 0){
        alert("you can't divide by 0");
    }else {
        return divide(a,b);
    }
    break;
default:
    console.log("something went wrong");
    }
}


function add (a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

