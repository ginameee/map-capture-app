/**
 * Created by owner on 2018-11-08.
 */
"use strict";
app.directive('olMap', ($timeout) => {
    return {
        scope: true,
        restrict: 'E',
        priority: 0,
        template: '<div id="olMap"></div>',
        controller: function($scope, $element, $attrs, $transclude) {
            var map = new ol.Map({
                target: 'olMap',
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([37.41, 8.82]),
                    zoom: 4
                })
            });
        }
    }
});