let outputBox = '0';
let isResultDisplayed = false;
let clearTimeoutRef = null;
document.querySelector('#display').value = outputBox;

function solve() {
  try {
    const symbolFilter = outputBox.replace(/%/g, '/100').replace(/÷/g, '/').replace(/x/g, '*');
    outputBox = eval(symbolFilter).toString();
    document.querySelector('#display').value = outputBox;
    isResultDisplayed = true;
  } catch (error) {
    document.querySelector('#display').value = 'Error';
    isResultDisplayed = true;
  }
}

function clearIfNeeded() {
  if (isResultDisplayed) {
    outputBox = '0';
    document.querySelector('#display').value = outputBox;
    isResultDisplayed = false;
  }
}

function handleNumberInput(number) {
  clearIfNeeded();
  if (outputBox === '0') {
    outputBox = number;
  } else {
    outputBox += number;
  }
  document.querySelector('#display').value = outputBox;
}

function percentage() {
  clearIfNeeded();
  outputBox += '%';
  document.querySelector('#display').value = outputBox;
}

function division() {
  clearIfNeeded();
  outputBox += '÷';
  document.querySelector('#display').value = outputBox;
}

function multiplication() {
  clearIfNeeded();
  outputBox += 'x';
  document.querySelector('#display').value = outputBox;
}

function subtraction() {
  clearIfNeeded();
  outputBox += '-';
  document.querySelector('#display').value = outputBox;
}

function addition() {
  clearIfNeeded();
  outputBox += '+';
  document.querySelector('#display').value = outputBox;
}

function point() {
  clearIfNeeded();
  outputBox += '.';
  document.querySelector('#display').value = outputBox;
}

function toggleSwitch() {
  clearIfNeeded();
  if (outputBox.startsWith('-')) {
    outputBox = outputBox.slice(1);
  } else {
    outputBox = '-' + outputBox;
  }
  document.querySelector('#display').value = outputBox;
}

function backSpace() {
  if (outputBox.length > 1) {
    outputBox = outputBox.slice(0, -1);
  } else {
    outputBox = '0';
  }
  document.querySelector('#display').value = outputBox;
}

function allClear() {
  outputBox = '0';
  document.querySelector('#display').value = outputBox;
}

const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('mousedown', () => {
  clearTimeoutRef = setTimeout(() => {
    allClear();
    clearButton.innerHTML = 'AC';
    clearTimeoutRef = null;
  }, 2000);
  clearButton.innerHTML = '⌫';
});

clearButton.addEventListener('mouseup', () => {
  if (clearTimeoutRef) {
    clearTimeout(clearTimeoutRef);
    clearTimeoutRef = null;
    backSpace();
  }
  clearButton.innerHTML = '⌫';
});

clearButton.addEventListener('mouseleave', () => {
  if (clearTimeoutRef) {
    clearTimeout(clearTimeoutRef);
    clearTimeoutRef = null;
  }
  clearButton.innerHTML = '⌫';
});
