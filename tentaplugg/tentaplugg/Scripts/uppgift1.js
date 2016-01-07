//SoC innebär att man skriver html-kod i html-documentet, css i css-filen och javascript i js-filen. Att man delar upp sina metoder så att en metod endast gör en sak, och att saker och ting ligger på rätt ställe i koden!
$(function () {
    //bubbling innebär att eventet triggas på vägen upp i domträdet, och bubblic är det defauta värdet vilket inntebär att man inte behöver specificera det. Vill man att det ska triggas på vägen ner så använder an true efter functionen. Kan använda fals ochså om man vill att det ska vara bubeling, med det är det osm sagt per default! 
    $("#split").on("click", function() {
        var text = $("#text").val();
        splitText(text);
    });
});

function splitText(text) {
    $("#result").innerHeight = "";
    var textArray = text.split(/[.?!]/);
    var output = "";
    for (var i = 0; i < textArray.length; i++) {
        output += "<p>" + textArray[i] + "</p>";
    }
    $("#result").html(output);
}