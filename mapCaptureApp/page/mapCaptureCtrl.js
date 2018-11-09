/**
 * Created by owner on 2018-11-08.
 */
"use strict";
app.controller('mapCaptureCtrl', [ '$scope',
    ($scope) => {
        $scope.mapType = 'o';

        $scope.selectMap = (type) => {
            $scope.mapType = type
        };

        $scope.capture = () => {
            switch ($scope.mapType) {
                case 'o':
                    break;
                case 'b':
                    break;
                case 'g':
                    break;
            }
        };


    }
]);