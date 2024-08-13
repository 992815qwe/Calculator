let memory = 0;

function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    const display = document.getElementById('display');
    display.value += memory;
}

function memoryAdd() {
    const display = document.getElementById('display');
    try {
        memory += eval(display.value);
        display.value = '';
    } catch (e) {
        display.value = 'Error';
    }
}

function memorySubtract() {
    const display = document.getElementById('display');
    try {
        memory -= eval(display.value);
        display.value = '';
    } catch (e) {
        display.value = 'Error';
    }
}
