orderForm.controller('orderController', function ($scope, heroes, orders) {

    $scope.heroes = [];

    heroes.query(function (oData) {
        $scope.heroes = oData.value;
    });

    $scope.priceMax = 1000;
    $scope.priceMin = 100;
    $scope.maxPriceValue = $scope.priceMax;
    //$scope.skillSet = {
    //    Strong: VerEx(
    //    Green: ['green']
    //};
    //heroes.query(function (oData) {
    //    $scope.heroes = oData
    //});

    $scope.orderTextChanged = function () {
        $scope.orderText 
    }

    $scope.priceRangeChanged = function () {
        $scope.orderText
    }
});