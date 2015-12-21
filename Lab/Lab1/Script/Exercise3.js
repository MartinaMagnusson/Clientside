var summa = document.getElementById('summa2').addEventListener('click', skrivUtSumman, false);

function skrivUtSumman() {
    var tal = document.getElementById('tal').value;
    document.getElementById('summa2').innerHTML = räknaUtSumman(tal);
}

function räknaUtSumman(tal) {
    return (Number(tal) * 3) + 7;
}