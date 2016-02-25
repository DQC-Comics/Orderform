var orderForm = angular.module('orderForm', []);

function showMore(e) {
    if (e.checked) {
        $('#deliverySection').show()
    } else {
        $('#deliverySection').hide();
    }
}
$(document).ready(function () {
    $('#deliverySection').hide()
})