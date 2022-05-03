const outputScreen = document.querySelector('.calculator__screen');
const calculatorButtons = document.querySelectorAll('.calculator-buttons__button');
const multiplicationButton = document.querySelector('.calculator-buttons__button.multiplication');
const clearButton = document.querySelector('.calculator-buttons__button.clear');
const delButton = document.querySelector('.calculator-buttons__button.del');
const substractionButton = document.querySelector('.calculator-buttons__button.substraction');
const additionButton = document.querySelector('.calculator-buttons__button.addition');
const equalButton = document.querySelector('.calculator-buttons__button.equal');
let numberString;
calculatorButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        numberString = outputScreen.value += button.getAttribute('data-value') ?? '';
        additionButton.addEventListener('click', ()=>{
            numberString += Number(outputScreen.textContent) + Number(button.textContent);
        });
    });
});
clearButton.addEventListener('click', ()=>{
    outputScreen.textContent = '';
});
equalButton.addEventListener('click', ()=>{
    outputScreen.textContent = eval(numberString);
});
delButton.addEventListener('click', ()=>{
    numberString = String(numberString).substring(0, numberString.length - 1);
});

//# sourceMappingURL=index.c719088e.js.map
