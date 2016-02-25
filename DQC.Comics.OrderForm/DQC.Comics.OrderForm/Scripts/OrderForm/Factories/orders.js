orderForm.factory('orders', function ($resource) {
    return $resource("http://dqccsomics-webapi.azurewebsites.net/api/Bookings/:id", { '$orderby': 'id asc' }, { query: { isArray: false } });
});