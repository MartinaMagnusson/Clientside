$(function () {
    createProducts();
    if (String($('#search').value).trim() == "" || $('#search').value == null) {
        $('h2').remove();
        $('article').remove();
        createProducts();
    }
       
    $('.category').on("click", function () {
        var searchField = $('#search').val();
        var regex = new RegExp(searchField, "i");
        $('h2').remove();
        $('article').remove();
        createProducts();
        searchProduct(regex);
    });

    $('#search').keyup(function () {
        var searchField = $(this).val();
        var regex = new RegExp(searchField, "i");
        $('h2').remove();
        $('article').remove();
        createProducts();
        searchProduct(regex);
    });
});

function createProducts() {
    $.getJSON('product.json', function (data) {
        var output = "";
        $.each(data.product, function (key, val) {
            if ($('#' + val.productType.toLocaleLowerCase()).is(":checked")) {
                output += " <h2 class='text-center " + val.productType + "'>" + val.productType + " </h2>";
                $.each(val.products, function (productKey, productVal) {
                    output += "<article class='col-sm-12 " + val.productType
                        + "' id='" + productVal.productName.replace(" ", "") + "'><fieldset>";
                    output += " <legend>" + productVal.day + " " + val.productType + " </legend>";
                    output += "<div class='col-sm-8'>";
                    output += "<h3>" + productVal.productName + "</h3>";
                    output += "<p>" + productVal.description + "</p>";
                    output += "<p class='price'>" + productVal.price + "kr</p>";
                    output += "</div>";
                    output += "<div class='col-sm-4'>";
                    output += '<img src="' + productVal.image + '" alt="' + productVal.description + '"/>';
                    output += "</div>";
                    output += "</fieldset></article>";
                });
            }
            $('#menuPlace').html(output);
        });
    });
}

function searchProduct(regex) {
    $.getJSON('product.json', function (data) {
        $.each(data.product, function (key, val) {
            $.each(val.products, function (productKey, productVal) {
                if ((productVal.description.search(regex) === -1) && (productVal.productName.search(regex) === -1)) {
                    $('#' + productVal.productName.replace(" ", "")).hide();
                }
            });
            if (!$('#' + val.productType.toLocaleLowerCase()).is(":checked"))
                $('.' + val.productType).hide();
        });
    });
}