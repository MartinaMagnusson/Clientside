var lön = document.getElementById("lön").addEventListener("click", bruttoLön, false);
var brutto = document.getElementById('brutto').innerHTML;

function bruttoLön() {
    var försäljning = document.getElementById("försäljningssumman").value;
    document.getElementById("lön").innerHTML = Calculate(brutto, försäljning);
}

function Calculate(brutto, försäljning) {
    return Number(brutto) + (Number(försäljning) * 0.09);
}