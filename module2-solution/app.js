( function(){
    'use strict';
    angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController);

    ToBuyController.$inject = ['$scope'];
    AlreadyBoughtController.$inject = ['$scope'];

    function ToBuyController($scope){
        $scope.items= "no of items";
        
            
            
        };
    


})();