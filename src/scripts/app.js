const outputScreen = document.querySelector('.calculator__screen');
const calculatorButtons = document.querySelectorAll('.calculator-buttons__button');
const multiplicationButton = document.querySelector('.calculator-buttons__button.multiplication');
const clearButton = document.querySelector('.calculator-buttons__button.clear');
const delButton = document.querySelector('.calculator-buttons__button.del');
const substractionButton = document.querySelector('.calculator-buttons__button.substraction');
const additionButton = document.querySelector('.calculator-buttons__button.addition');
const equalButton = document.querySelector('.calculator-buttons__button.equal');


calculatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const numberString = outputScreen.textContent += button.textContent;
        additionButton.addEventListener('click', () => {
            numberString += Number(outputScreen.textContent) + Number(button.textContent)
        })
    })
})