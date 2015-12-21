var medelvärde = document.getElementById('medelvärde').addEventListener('click', skriverUtMedelvärdet, false);
var summa = document.getElementById('summa').addEventListener('click', skrivUtSumman, false);

function skriverUtMedelvärdet() {
    var tal1 = document.getElementById('tal1').value;
    var tal2 = document.getElementById('tal2').value;
    var tal3 = document.getElementById('tal3').value;
    if (isNaN(tal1) && isNaN(tal2) && isNaN(tal3))
        document.getElementById('medelvärde').innerHTML = medelvärdet(tal1, tal2, tal3);
    else
    document.getElementById('medelvärde').innerHTML = "Skriv in tre nummer";
}

function medelvärdet(tal1, tal2, tal3) { 
        return (Number(tal1) + Number(tal2) + Number(tal3)) / 3;
}

function skrivUtSumman() {
    var tal1 = document.getElementById('tal1').value;
    var tal2 = document.getElementById('tal2').value;
    var tal3 = document.getElementById('tal3').value;
    if (isNaN(tal1) && isNaN(tal2) && isNaN(tal3))
        document.getElementById('summa').innerHTML = addera(tal1, tal2, tal3);
    else 
        document.getElementById('summa').innerHTML = "Skriv in tre nummer";
}

function addera(tal1, tal2, tal3) {
    return Number(tal1) + Number(tal2) + Number(tal3);
}