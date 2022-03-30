( function(){
    'use strict';
    angular.module("myFirstApp", [])
    .controller("LunchCheckController", function($scope) {
        $scope.item1="bread";
        $scope.item2="milk";
        $scope.item3="butter";
const item = "Number of item entered"
        $scope.splitItem = function(){
            const stritem = item.split();

        }


    });
})();