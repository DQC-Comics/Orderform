orderForm.controller('orderController', function ($scope, $timeout, heroes, orders) {

    $scope.selectAccOpen = true;
    $scope.orderAccOpen = false;
    $scope.orderDone = false;

    $scope.heroes = [];

    $scope.order = new orders();
    $scope.order.Heroes = [];

    $scope.order.StartTime = new Date();
    $scope.order.EndTime = new Date();
    $scope.order.EndTime.setDate(new Date().getDate() + 1)

    $scope.byRange = function (maxValue) {
        if (maxValue === undefined) maxValue = Number.MAX_VALUE;

        return function predicateFunc(item) {
            return item.DebitPrice <= maxValue;
        };
    };

    $scope.orderTextChanged = function () {
        heroes.query(function (data) {
            $scope.heroes = data;

            var priceRange = $scope.heroes.map(function (h) { return h.DebitPrice; });

            $scope.priceMax = Math.max.apply(Math, priceRange);
            $scope.priceMin = Math.min.apply(Math, priceRange);

            $timeout(function () {
                $scope.maxPriceValue = $scope.priceMax;
            });

        });
    };

    $scope.saveOrder = function () {

        orders.save($scope.order, function (newOrderItem) {
            $scope.orderDone = true;
        });
    };

    $scope.selectHero = function (heroId) {

        $scope.selectAccOpen = false;
        $scope.orderAccOpen = true;

        $scope.order.Heroes = [
            { Id: heroId }
        ];
    };

    $scope.getPosition = function (position) {
        $scope.order.Location = position.coords.latitude + "," + position.coords.longitude;
       
        var adress = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + $scope.order.Location + "&sensor=true";
        $.getJSON(adress, function (data) {
            $scope.currentLocation = data.results[1].formatted_address;
            $scope.order.Country = data.results[3].address_components[1].long_name;
            $scope.order.City = data.results[3].address_components[0].long_name;
        });


    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition($scope.getPosition);
    }

});