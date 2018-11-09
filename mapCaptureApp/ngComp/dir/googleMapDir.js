/**
 * Created by owner on 2018-11-08.
 */
"use strict";
app.directive('googleMap', () => {
    return {
        scope: true,
        restrict: 'E',
        priority: 0,
        template: '<div id="googleMap"></div>',
        controller: () => {
            var map = new google.maps.Map(document.getElementById('googleMap'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });
        }
    }
});