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
