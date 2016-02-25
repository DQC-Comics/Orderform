orderForm.controller('heroController', function ($scope, heroes) {
    heroes.query(function (oData) {
        $scope.hereos = oData.value;
    });


});