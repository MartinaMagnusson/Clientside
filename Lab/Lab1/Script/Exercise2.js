var medelvärde = document.getElementById('medelvärde').addEventListener('click', medelvärdet, false);
var summa = document.getElementById('summa').addEventListener('click', summan, false);
function medelvärdet() {
    var tal1 = document.getElementById('tal1').value;
    var tal2 = document.getElementById('tal2').value;
    var tal3 = document.getElementById('tal3').value;
    document.getElementById('medelvärde').innerHTML = räknaUtMedelvärdet(tal1, tal2, tal3);
}

function räknaUtMedelvärdet(tal1,tal2,tal3) {
    return (Number(tal1) + Number(tal2) + Number(tal3)) / 3;
}

function summan() {
    var tal1 = document.getElementById('tal1').value;
    var tal2 = document.getElementById('tal2').value;
    var tal3 = document.getElementById('tal3').value;
    document.getElementById('summa').innerHTML = addera(tal1, tal2, tal3);
}

function addera(tal1,tal2,tal3) {
    return Number(tal1) + Number(tal2) + Number(tal3);
}