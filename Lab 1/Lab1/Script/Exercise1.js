var lön = document.getElementById("lön").addEventListener("click", bruttoLön, false);
var brutto = document.getElementById('brutto').innerHTML;

function bruttoLön() {
    var försäljning = document.getElementById("försäljningssumman").value;
    if(isNaN(försäljning))
        document.getElementById("lön").innerHTML = Calculate(brutto, försäljning);
    else
        document.getElementById("lön").innerHTML = "Skriv in ett tal";
}

function Calculate(brutto, försäljning) {
    return Number(brutto) + (Number(försäljning) * 0.09);
}