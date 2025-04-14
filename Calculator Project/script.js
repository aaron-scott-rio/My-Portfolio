// Function to display the calculation
function display(value) {
    let displayElement = document.getElementById("display");
    if (displayElement.innerText === '0') {
        displayElement.innerText = value;  // Replace '0' with the pressed key
    } else {
        displayElement.innerText += value;  // Append to the current display value
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").innerText = '0';  // Reset the display to '0'
}

// Function to handle calculator keys like numbers and operators
function calculatorKeys(key) {
    display(key);  // Pass the key to the display function
}

// Function to evaluate the expression
function evaluateExpression() {
    let displayElement = document.getElementById("display");
    let expression = displayElement.innerText;
    
    try {
        // Use `eval` for simplicity, but ensure the expression is safe
        let result = eval(expression.replace('÷', '/').replace('X', '*'));
        displayElement.innerText = result;  // Display the result
    } catch (error) {
        displayElement.innerText = "Error";  // Handle any errors in the calculation
    }
}

// Function to handle backspace (delete last character)
function backspace() {
    let displayElement = document.getElementById("display");
    let currentDisplay = displayElement.innerText;

    if (currentDisplay.length > 1) {
        displayElement.innerText = currentDisplay.slice(0, -1);  // Remove last character
    } else {
        displayElement.innerText = '0';  // Reset to '0' if there's only one character
    }
}
