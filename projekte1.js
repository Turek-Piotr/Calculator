function calculate(){
    const num1 = parseInt(document.getElementById("num1").value);
    const char = document.getElementById("char").value;
    const num2 = parseInt(document.getElementById("num2").value);

    let result;

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
            result = "Dzielenie przez zero jest niedozwolone";
        }
    } else if (char == "^") {
        result = Math.pow(num1, num2);  
    }
    
    document.getElementById("res").textContent = "Wynik to: " + result;

    const historyDiv = document.getElementById("history");
    const operation = num1 + " " + char + " " + num2 + " = " + result;
    historyDiv.innerHTML += operation + "<br>";
}
