var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "product.json", true);
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var jsonObjectet = JSON.parse(request.responseText);
        var output = "";
        for (var i = 0; i < jsonObjectet.product.length; i++) {
            for (var j = 0; j < jsonObjectet.product[i].products.length; j++) {
                output += '<article class="col-sm-4"><fieldset><legend>' +
                       jsonObjectet.product[i].productType +
                       "<h3>" +
                       jsonObjectet.product[i].products[j].productName +
                       "</h3>" +
                       "<img src=" +
                       jsonObjectet.product[i].products[j].image +
                       '"/>' +
                        '<div class="price" id="tuseday">' +
                        jsonObjectet.product[i].products[j].price +
                        'kr </div>' +
                       "</legend></fieldset></article>";
            }       
        }
        document.getElementById('burgersPlace').innerHTML = output;
    }
}
request.send();