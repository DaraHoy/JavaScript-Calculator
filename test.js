document.getElementById("submit").onclick = function() {
    //get numbers from textfield
    var input = document.getElementById("input").value;
    console.log(input);
    //didplay span
    document.getElementById("display").textContent += input;
    document.getElementById("input").value = "";
}

document.getElementById("addDigits").onclick = function() {
    var display = document.getElementById("display").innerHTML;
    var total = 0;
    for (var i = 0; i < display.length; i++) {
        total += parseInt(display[i])
    }
    document.getElementById("display").innerHTML = total;
}

document.getElementById("calculate").onclick = function() {
    var display = document.getElementById("display").innerHTML;
    var digits = [];
    var total = 0;
    for (var i = 0; i < display.length; i++) {
        // get each digit and put into digits array
        // if display[i] is a math operation, join digits and run operation
        //multiply
        //divide
        //add
        if (display[i] === "+") {
            console.log(parseInt(digits.join))

            console.log(total += parseInt(digits.join))
        }
        total += parseInt(display[i])
        //subtract
    }
    document.getElementById("display").innerHTML = total;
}
