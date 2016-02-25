var orderForm = angular.module('orderForm', ['ngResource', 'ui-rangeSlider']);

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
