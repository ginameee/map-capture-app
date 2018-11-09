/**
 * Created by owner on 2018-11-08.
 */
"use strict";
app.directive('bingMap', function($timeout, config) {
    return {
        scope: true,
        restrict: 'E',
        priority: 0,
        template: '<div id="bingMap"></div>',
        controller: function($scope, $element, $attrs, $transclude) {
            var map = new Microsoft.Maps.Map(document.getElementById('bingMap'), {
                credentials: config.bingMapKey
            });
        }
    }
});