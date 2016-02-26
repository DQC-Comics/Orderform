'use strict';
function getLocation() {
    //Check if browser is compatible with html5
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else {
        $(".currentLocation").text("Geolocation is not supported by this browser")
    }

}
function showPosition(position) {
    var x = document.getElementById("mapHolder");
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var latlonHolder = document.getElementById("latlonHolder");
    latlonHolder.innerHTML = latlon;
    
    var adress = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlon + "&sensor=true"
    $.getJSON(adress, function (data) {
      x.innerHTML = data.results[1].formatted_address
    })
    

}
$(document).ready(function () {
    getLocation();

})