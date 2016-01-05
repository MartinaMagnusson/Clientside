$(function () {
    $.getJSON('product.json', function (data) {
        var output = "";
        $.each(data.product, function (key, val) {
                output += " <h2 class='text-center'>" + val.productType + " </h2>";
                $.each(val.products, function (productKey, productVal) {
                    output += "<article class='col-sm-12'><fieldset>";
                    output += " <legend>" + productVal.day + " " + val.productType + " </legend>";
                    output += "<div class='col-sm-8'>";
                    output += "<h3>" + productVal.productName + "</h3>";
                    output += "<p>" + productVal.description + "</p>";
                    output += "<p>" + productVal.price + "kr</p>";
                    output += "</div>";
                    output += "<div class='col-sm-4'>";
                    output += "<img src=" + productVal.image + '"/>';
                    output += "</div>";
                    output += "</article></fieldset>";
                });
            $('#menuPlace').html(output);
        });
    });

    $('button').on('click', function () {
        $('#menuPlace').innerHTML = "";
        var productType = $(this).text();
        filterOnProduct(productType);
    });
    $('#search').keyup(function () {
        $('#menuPlace').innerHTML = "";
        var searchField = $(this).val();
        var regex = new RegExp(searchField, "i");
        $.getJSON('product.json', function (data) {
            var output = "";
            $.each(data.product, function (key, val) {
                if (val.productType.search(regex) !== -1)
                    output += " <h2 class='text-center'>" + val.productType + " </h2>";
                $.each(val.products, function (productKey, productVal) {
                    if ((val.productType.search(regex) !== -1) || (productVal.productName.search(regex) !== -1)) {
                        output += "<article class='col-sm-12'><fieldset>";
                        output += " <legend>" + productVal.day + " " + val.productType + " </legend>";
                        output += "<div class='col-sm-8'>";
                        output += "<h3>" + productVal.productName + "</h3>";
                        output += "<p>" + productVal.description + "</p>";
                        output += "<p>" + productVal.price + "kr</p>";
                        output += "</div>";
                        output += "<div class='col-sm-4'>";
                        output += "<img src=" + productVal.image + '"/>';
                        output += "</div>";
                        output += "</article></fieldset>";
                    }
                });
                $('#menuPlace').html(output);
            });
        });

    });
});

function filterOnProduct(type) {
    $.getJSON('product.json', function (data) {
        var output = "";
        $.each(data.product, function (key, val) {
            if (val.productType === type) {
                output += " <h2 class='text-center'>" + val.productType + " </h2>";
                $.each(val.products, function (productKey, productVal) {
                    output += "<article class='col-sm-12'><fieldset>";
                    output += " <legend>" + productVal.day + " " + val.productType + " </legend>";
                    output += "<div class='col-sm-8'>";
                    output += "<h3>" + productVal.productName + "</h3>";
                    output += "<p>" + productVal.description + "</p>";
                    output += "<p>" + productVal.price + "kr</p>";
                    output += "</div>";
                    output += "<div class='col-sm-4'>";
                    output += "<img src=" + productVal.image + '"/>';
                    output += "</div>";
                    output += "</article></fieldset>";
                });
            }
            $('#menuPlace').html(output);
        });
    });
}



























//function getProductType(productType, output) {
//    switch (true) {
//        case productType === "Hamburger":
//            $('#menuPlace').html(output);
//            break;
//        case productType === "Sub":
//            $('#subsPlace').html(output);
//            break;
//        case productType === "Drink":
//            $('#drinksPlace').html(output);
//            break;
//        case productType === "Pizza":
//            $('#pizzaPlace').html(output);
//            break;
//        default:
//    }
//}






//var request;
//if (window.XMLHttpRequest) {
//    request = new XMLHttpRequest();
//} else {
//    request = new ActiveXObject("Microsoft.XMLHTTP");
//}
//request.open("GET", "product.json", true);
//request.onreadystatechange = function () {
//    if (request.readyState === 4 && request.status === 200) {
//        var jsonObjectet = JSON.parse(request.responseText).product;
//        var output = "";
//        for (var i = 0; i < jsonObjectet.length; i++) {
//            for (var j = 0; j < jsonObjectet[i].products.length; j++) {
//                output += '<article class="col-sm-4"><fieldset><legend>' +
//                       jsonObjectet[i].productType +
//                       "<h3>" +
//                       jsonObjectet[i].products[j].productName +
//                       "</h3>" +
//                       "<img src=" +
//                       jsonObjectet[i].products[j].image +
//                       '"/>' +
//                        "<p>" +
//                        jsonObjectet[i].products[j].description +
//                        "</p>" +
//                         '<div class="price" id="tuseday">' +
//                        jsonObjectet[i].products[j].price +
//                        'kr </div>' +
//                       "</legend></fieldset></article>";
//            }
//            getProductType(jsonObjectet[i].productType, output);
//        }
//    }
//}

//function getProductType(productType, output) {
//    switch (true) {
//        case productType === "Hamburger":
//            document.getElementById('burgersPlace').innerHTML = output;
//            break;
//        case productType === "Sub":
//            document.getElementById('subsPlace').innerHTML = output;
//            break;
//        case productType === "Drink":
//            document.getElementById('drinksPlace').innerHTML = output;
//            break;
//        case productType === "Pizza":
//            document.getElementById('pizzaPlace').innerHTML = output;
//            break;
//        default:
//    }
//}