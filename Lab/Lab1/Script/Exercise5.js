var svar = document.getElementById('svar').addEventListener('click', skrivUtSvar, false);

function skrivUtSvar() {
    var maxTal = document.getElementById('hundra').innerHTML;
    document.getElementById('svar').innerHTML = jämnaTal(maxTal);
}

function jämnaTal(maxTal) {
    var tal = '';
    for (var i = 1; i <= maxTal; i++) {
        if (i % 2 == 0)
            if (i != 100)
                tal += String(i + ', ');
            else 
                tal += String(i);
    }
    return tal;
}