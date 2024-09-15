// Function to append values to the display
function appendToDisplay(value) {
    var input = document.getElementById("display");
    input.disabled = false;
    input.value += value;
    input.disabled = true;
}

// Function to clear the input
function clearInput() {
    var input = document.getElementById("display");
    input.disabled = false;
    input.value = "";
    input.disabled = true;
}

// Function to calculate the result
function calculateResult() {
    var input = document.getElementById("display");
    input.disabled = false;
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error";
    }
    input.disabled = true;
}

// Handling keyboard input
document.addEventListener("keydown", function(event) {
    const validKeys = '0123456789+-*/.';
    if (validKeys.includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default Enter key behavior
        calculateResult();
    } else if (event.key === 'Backspace') {
        var input = document.getElementById("display");
        input.disabled = false;
        input.value = input.value.slice(0, -1);
        input.disabled = true;
    } else if (event.key === 'Escape') {
        clearInput();
    }
});
