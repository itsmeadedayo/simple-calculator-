


let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}


function appendOperator(op) {
    if (currentInput !== ''){
        currentInput += '' + op + '';
        updateDisplay();
    }
}


function calculator() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error){
        currentInput= '';
        updateDisplay();
    }
}


function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay(){
     document.getElementById('display').value = currentInput;
}



