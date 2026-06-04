let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        const openCount = (expression.match(/\(/g) || []).length;
        const closeCount = (expression.match(/\)/g) || []).length;
        if (openCount > closeCount) {
            expression += ")".repeat(openCount - closeCount);
        }
        expression = expression.replace(/√\(/g, 'Math.sqrt(');
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}