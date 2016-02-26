orderForm.factory('heroes', function ($resource) {
    return $resource("https://dqccsomics-webapi.azurewebsites.net/api/Heroes/:id", { '$orderby': 'Title asc' }, { query: { isArray: false } });
    //var factory = {};

    //factory.query = function () {
    //    return [
    //        { Name: "Hulk", Description: "Hello green guy", Skills: ["Strong", "Fast", "Green"] },
    //        { Name: "Black Widow", Description: "Hello green guy", Skills: ["Strong", "Fast", "Green"] },
    //        { Name: "Thor", Description: "Hello green guy", Skills: ["Strong", "Fast", "Green"] },
    //        { Name: "Iron Man", Description: "Hello green guy", Skills: ["Strong", "Fast", "Green"] },
    //    ];
    //};

    //return factory;
});