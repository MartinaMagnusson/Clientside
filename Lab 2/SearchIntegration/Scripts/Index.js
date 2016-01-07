$(function () {
    createProducts();
    if ($('#search').value === "" || $('#search').value === null || $('#search').value === " ")
        createProducts();

    $('.category').on('click', function () {
        $('h2').remove();
        $('article').remove();
        createProducts();
        filterByCategory();
    });

    $('#search').keyup(function () {
        $('h2').remove();
        $('article').remove();
        createProducts();
        //output = "";
        var searchField = $(this).val();
        var regex = new RegExp(searchField, "i");
        searchByText(regex);
    });
});

function createProducts() {
    $.getJSON('product.json', function (data) {
        var output = "";
        $.each(data.product, function (key, val) {
            output += " <h2 class='text-center " + val.productType + "'>" + val.productType + " </h2>";
            $.each(val.products, function (productKey, productVal) {
                output += "<article class='col-sm-12 " + val.productType + "'><fieldset>";
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
            $('#menuPlace').html(output);
        });
    });
}

function filterByCategory() {
    $.getJSON('product.json', function (data) {
        $.each(data.product, function (key, val) {
            if (!$('#' + val.productType.toLocaleLowerCase()).is(":checked"))
                $('.' + val.productType).hide();
        });
    });
}

function searchByText(regex) {
    $.getJSON('product.json', function (data) {
        $.each(data.product, function (key, val) {
            $.each(val.products, function (productKey, productVal) {
                if ((productVal.description.search(regex) !== -1) || (productVal.produccontainstName.search(regex) !== -1)) {
                    $(val).hide();
                    //output += "<article class='col-sm-12'><fieldset>";
                    //output += " <legend>" + productVal.day + " " + val.productType + " </legend>";
                    //output += "<div class='col-sm-8'>";
                    //output += "<h3>" + productVal.productName + "</h3>";
                    //output += "<p>" + productVal.description + "</p>";
                    //output += "<p class='price'>" + productVal.price + "kr</p>";
                    //output += "</div>";
                    //output += "<div class='col-sm-4'>";
                    //output += '<img src="' + productVal.image + '" alt="' + productVal.description + '"/>';
                    //output += "</div>";
                    //output += "</article></fieldset>";
                }
                //if (hideProducttype === true)
                //    $('h2').hide();
            });
            //if (output != null || output !== "")
            //    $('#menuPlace').html(output);
        });
        //if ($('button').click) {
        //    $('button').on('click', function () {
        //        var productType = $(this).text();
        //        filterByCategory(productType, output = "", regex);
        //    });
        //}
    });
}