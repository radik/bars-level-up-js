/**
* demo2 Module
*
* Description
*/
angular.module('demo2', []).controller('FirstController', ['$scope', function($scope){
    $scope.name = 'FirstController';
}]);

angular.module('demo2').controller('SecondController', ['$scope', function($scope){
    $scope.name = 'SecondController';
    $scope.lastNames = ['Jhons', 'Black', 'White'];
}])