function calculate(){
    const num1 = parseInt(document.getElementById("num1").value);
    const char = document.getElementById("char").value;
    const num2 = parseInt(document.getElementById("num2").value);

    let result

        if (char == "+") {
            result = num1 + num2;
        } else if (char == "-") {
            result = num1 - num2;
        } else if (char == "*") {
            result = num1 * num2;
        } else if (char == "/") {
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                result = "Nie można dzielić przez 0!";
            }
        }

        document.getElementById("res").textContent = "Wynik to: " +result;
}
