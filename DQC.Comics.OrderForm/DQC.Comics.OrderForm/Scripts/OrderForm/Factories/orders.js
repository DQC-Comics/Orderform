orderForm.factory('orders', function ($resource) {
    return $resource("https://dqccomics-webapi.azurewebsites.net/api/Bookings/:id", { }, { });
});