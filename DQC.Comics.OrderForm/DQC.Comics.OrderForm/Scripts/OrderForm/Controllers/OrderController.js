orderForm.controller('orderController', function ($scope, heroes) {

    //$scope.skillSet = {
    //    Strong: VerEx(
    //    Green: ['green']
    //};
    //heroes.query(function (oData) {
    //    $scope.heroes = oData
    //});

    $scope.heroes = heroes.query();

    $scope.skills = {};

    $scope.orderTextChanged = function () {
        $scope.orderText 
    }
});