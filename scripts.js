document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("inputBox");
    const inputButton = document.getElementById("inputButton");
    const output = document.getElementById("output");

    inputButton.addEventListener("click", function() {
        const inputValue = inputBox.value;
        output.innerHTML = `You entered: ${inputValue}`;
    });
});