var attBetala = document.getElementById("att_betala").addEventListener("click", skrivUtSumman, false);

function skrivUtSumman() {
    var pris = document.getElementById("pris").value;
    document.getElementById("att_betala").innerHTML = räknaUtSumman(pris);
}

function räknaUtSumman(pris) {
    if (pris >= 1000)
        return pris * 0.90;
    else
        return pris;
}