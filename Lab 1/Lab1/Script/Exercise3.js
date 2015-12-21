var summa = document.getElementById('summa2').addEventListener('click', skrivUtSumman, false);

function skrivUtSumman() {
    var tal = document.getElementById('tal').value;
    if (isNaN(tal)) 
        document.getElementById('summa2').innerHTML = räknaUtSumman(tal);
    else
        document.getElementById('summa2').innerHTML = "Skriv in ett nummer";
        
}

function räknaUtSumman(tal) {
    return (Number(tal) * 3) + 7;
}