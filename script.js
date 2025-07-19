const result = document.getElementById("result");

function append(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  try {
    const total = eval(result.value);
    result.value = total;
  } catch {
    result.value = 'Error';
  }
}