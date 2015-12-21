var summa = document.getElementById('summa2').addEventListener('click', skrivUtSumman, false);

function skrivUtSumman() {
    var tal = document.getElementById('tal').value;
    document.getElementById('summa2').innerHTML = ((Number(tal) * 3) + 7);
}
