const outputScreen = document.querySelector('.calculator__screen');
const calculatorButtons = document.querySelectorAll('.calculator-buttons__button');
const clearButton = document.querySelector('.calculator-buttons__button.clear');
const delButton = document.querySelector('.calculator-buttons__button.del');
const equalButton = document.querySelector('.calculator-buttons__button.equal');

calculatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentExpression = outputScreen.value += button.getAttribute('data-value') ?? '';
        equalButton.addEventListener('click', () => {
            outputScreen.textContent = eval(currentExpression)
        })
    })
})

clearButton.addEventListener('click', () => {
    outputScreen.textContent = '';
})

delButton.addEventListener('click', () => {
    outputScreen.textContent = outputScreen.value.slice(0, - 1)
})
