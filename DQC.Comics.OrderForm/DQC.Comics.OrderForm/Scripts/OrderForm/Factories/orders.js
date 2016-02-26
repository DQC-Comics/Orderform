orderForm.factory('orders', function ($resource) {
    return $resource("http://dqccomics-webapi.azurewebsites.net/api/Bookings/:id", { '$orderby': 'id asc' }, { });
});