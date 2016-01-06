$(function () {
    var output;
    $.getJSON('product.json', function (data) {
        output = "";
        $.each(data.product, function (key, val) {
            output += " <h2 class='text-center'>" + val.productType + " </h2>";
            $.each(val.products, function (productKey, productVal) {
                output += "<article class='col-sm-12'><fieldset>";
                output += " <legend>" + productVal.day + " " + val.productType + " </legend>";
                output += "<div class='col-sm-8'>";
                output += "<h3>" + productVal.productName + "</h3>";
                output += "<p>" + productVal.description + "</p>";
                output += "<p class='price'>" + productVal.price + "kr</p>";
                output += "</div>";
                output += "<div class='col-sm-4'>";
                output += '<img src="' + productVal.image + '" alt="' + productVal.description + '"/>';
                output += "</div>";
                output += "</article></fieldset>";
            });
            $('#menuPlace').html(output);
        });
    });

    $('button').on('click', function () {
        output = "";
        var productType = $(this).text();
        filterByCategory(productType, output, null);
    });
    $('#search').keyup(function () {
        output = "";
        var searchField = $(this).val();
        var regex = new RegExp(searchField, "i");
        searchByText(regex, output);
    });
});

function filterByCategory(type, output, regex) {
    $.getJSON('product.json', function (data) {
        $.each(data.product, function (key, val) {
            if (val.productType === type) {
                if ((regex !== "") && (regex !== null)) {
                    output += " <h2 class='text-center'>" + val.productType + " </h2>";
                    $.each(val.products, function (productKey, productVal) {
                        if ((productVal.description.search(regex) !== -1) || (productVal.productName.search(regex) !== -1)) {
                            output += "<article class='col-sm-12'><fieldset>";
                            output += " <legend>" + productVal.day + " " + val.productType + " </legend>";
                            output += "<div class='col-sm-8'>";
                            output += "<h3>" + productVal.productName + "</h3>";
                            output += "<p>" + productVal.description + "</p>";
                            output += "<p class='price'>" + productVal.price + "kr</p>";
                            output += "</div>";
                            output += "<div class='col-sm-4'>";
                            output += '<img src="' + productVal.image + '" alt="' + productVal.description + '"/>';
                            output += "</div>";
                            output += "</article></fieldset>";
                        }
                    });
                }
                else {
                    output += " <h2 class='text-center'>" + val.productType + " </h2>";
                    $.each(val.products, function (productKey, productVal) {
                        output += "<article class='col-sm-12'><fieldset>";
                        output += " <legend>" + productVal.day + " " + val.productType + " </legend>";
                        output += "<div class='col-sm-8'>";
                        output += "<h3>" + productVal.productName + "</h3>";
                        output += "<p>" + productVal.description + "</p>";
                        output += "<p class='price'>" + productVal.price + "kr</p>";
                        output += "</div>";
                        output += "<div class='col-sm-4'>";
                        output += '<img src="' + productVal.image + '" alt="' + productVal.description + '"/>';
                        output += "</div>";
                        output += "</article></fieldset>";
                    });
                }
                if (output != null || output !== "")
                    $('#menuPlace').html(output);
            }
        });
    });
}

function searchByText(regex, output) {
    $.getJSON('product.json', function (data) {
        $.each(data.product, function (key, val) {
            if (val.productType.search(regex) !== -1)
                output += " <h2 class='text-center'>" + val.productType + " </h2>";
            $.each(val.products, function (productKey, productVal) {
                if ((productVal.description.search(regex) !== -1) || (productVal.productName.search(regex) !== -1)) {
                    output += "<article class='col-sm-12'><fieldset>";
                    output += " <legend>" + productVal.day + " " + val.productType + " </legend>";
                    output += "<div class='col-sm-8'>";
                    output += "<h3>" + productVal.productName + "</h3>";
                    output += "<p>" + productVal.description + "</p>";
                    output += "<p class='price'>" + productVal.price + "kr</p>";
                    output += "</div>";
                    output += "<div class='col-sm-4'>";
                    output += '<img src="' + productVal.image + '" alt="' + productVal.description + '"/>';
                    output += "</div>";
                    output += "</article></fieldset>";
                }
            });
            if (output != null || output !== "")
                $('#menuPlace').html(output);
        });
        if ($('button').click) {
            $('button').on('click', function () {
                var productType = $(this).text();
                filterByCategory(productType, output = "", regex);
            });
        }
    });
}