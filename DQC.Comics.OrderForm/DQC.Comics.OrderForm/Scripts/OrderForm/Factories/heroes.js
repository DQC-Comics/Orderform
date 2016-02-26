orderForm.factory('heroes', function ($resource) {
    return $resource("https://dqccomics-webapi.azurewebsites.net/api/Heroes/:id", { '$orderby': 'Name asc' }, {});
});