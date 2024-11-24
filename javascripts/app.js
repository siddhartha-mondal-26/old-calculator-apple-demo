let outputBox = '0';
let isResultDisplayed = false;
document.querySelector('#display').value = outputBox;
function solve() {
  try {
    const symbolFilter = outputBox.replace(/%/g, '/100').replace(/÷/g, '/').replace(/x/g, '*');
    outputBox = eval(symbolFilter);
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
    document.querySelector('#display').value=outputBox;
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
  let symbol = '%';
  outputBox = outputBox + symbol;
  document.querySelector('#display').value=outputBox;

}
function division() {
  clearIfNeeded();
  let symbol = '÷';
  outputBox = outputBox + symbol;
  document.querySelector('#display').value=outputBox;
}
function multiplication() {
  clearIfNeeded();
  let symbol = 'x';
  outputBox = outputBox + symbol;
  document.querySelector('#display').value=outputBox;
}
function subtraction() {
  clearIfNeeded();
  let symbol = '-';
  outputBox = outputBox + symbol;
  document.querySelector('#display').value=outputBox;
}
function addition() {
  clearIfNeeded();
  let symbol = '+';
  outputBox = outputBox + symbol;
  document.querySelector('#display').value=outputBox;
}
function point() {
  clearIfNeeded();
  let symbol = '.';
  outputBox = outputBox + symbol;
  document.querySelector('#display').value=outputBox;
}
function toggleSwitch() {
  clearIfNeeded();
  if(outputBox) {
    if(outputBox.startsWith('-')) {
      outputBox = outputBox.slice(1);
      document.querySelector('#display').value=outputBox;
    }
    else if(outputBox.startsWith('+') || outputBox.startsWith('')) {
      if(outputBox.startsWith('+')) {
        outputBox = outputBox.slice(1);
        outputBox = '(-' + outputBox + ')';
        document.querySelector('#display').value=outputBox;
      }
      else if(outputBox.startsWith('')) {
        outputBox = '(-' + outputBox + ')';
        document.querySelector('#display').value=outputBox;
      }
    }
  }
}