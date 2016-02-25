orderForm.controller('orderController', function ($scope, heroes) {

    //$scope.skillSet = {
    //    Strong: VerEx(
    //    Green: ['green']
    //};
    //heroes.query(function (oData) {
    //    $scope.heroes = oData
    //});

    $scope.heroes = heroes.query();

    $scope.minPrice = 100;
    $scope.maxPrice = 999;

    $scope.orderMinPrice = $scope.minPrice;
    $scope.orderMaxPrice = $scope.maxPrice;

    $scope.orderTextChanged = function () {
        $scope.orderText 
    }
});