//object calculator
const calculator = {
    displayNumber : '0'
}

//output
function updateDisplay(){
    document.querySelector("#displayNumber").value = calculator.displayNumber;
}
//input digit
function inputDigit(digit){
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    }else{
        calculator.displayNumber += digit;
    }
}
//clear
function clear(){
    calculator.displayNumber = '0';
}
//perform calculation
function calculation(){
    try{
        calculator.displayNumber = eval(calculator.displayNumber);
    }catch{
        alert("Periksa kembali inputan anda");
    }
}
//delete number
function del(){
    calculator.displayNumber = calculator.displayNumber.slice(0,-1);
}
//add operator
function addOperator(o){
    calculator.displayNumber += o;
}

const buttons = document.querySelectorAll(".btn");
for (let button of buttons){
    button.addEventListener('click', function(event){
        const target = event.target;

        if (target.classList.contains('isClear')){
            clear();
            updateDisplay();
            return;
        }
        if (target.classList.contains('isEquals')){
            calculation();
            updateDisplay();
            return;
        }
        if (target.classList.contains('del')){
            del()
            updateDisplay();
            return;
        }
        if (target.classList.contains('divide')){
            addOperator('/');
            updateDisplay();
            return;
        }
        if (target.classList.contains('multiply')){
            addOperator('*');
            updateDisplay();
            return;
        }
        // if (target.classList.contains('negative')){
        //     inverseNumber();
        //     updateDisplay();
        //     return;
        // }
        inputDigit(target.innerText);
        updateDisplay()
    })
}