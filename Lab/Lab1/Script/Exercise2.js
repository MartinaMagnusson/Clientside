var medelvärde = document.getElementById('medelvärde').addEventListener('click', skriverUtMedelvärdet, false);
var summa = document.getElementById('summa').addEventListener('click', skrivUtSumman, false);

function skriverUtMedelvärdet() {
    var tal1 = document.getElementById('tal1').value;
    var tal2 = document.getElementById('tal2').value;
    var tal3 = document.getElementById('tal3').value;
    document.getElementById('medelvärde').innerHTML = medelvärdet(tal1, tal2, tal3);
}

function medelvärdet(tal1,tal2,tal3) {
    return (Number(tal1) + Number(tal2) + Number(tal3)) / 3;
}

function skrivUtSumman() {
    var tal1 = document.getElementById('tal1').value;
    var tal2 = document.getElementById('tal2').value;
    var tal3 = document.getElementById('tal3').value;
    document.getElementById('summa').innerHTML = addera(tal1, tal2, tal3);
}

function addera(tal1,tal2,tal3) {
    return Number(tal1) + Number(tal2) + Number(tal3);
}