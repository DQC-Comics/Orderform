orderForm.controller('heroController', function ($scope, heroes) {
    heroes.query(function (oData) {
        $scope.heroes = oData.value;
    });

    //$scope.heroes = heroes.query();

    $scope.$emit('response', $scope.heroes);
});