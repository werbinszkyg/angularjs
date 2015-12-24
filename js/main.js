// Main module
var mainModule = angular.module("mainModule", []);

// Test controller
mainModule.controller("testCtrl", [ "$scope", "$http", function($scope,$http) {
    // init yourName
    $scope.yourName = "Jack"; 
    
    $scope.greeting = function() {
        return "Rossz fej vagy " + $scope.yourName;
    }
    
    $scope.$watch("yourName", function(n, o) {
        if (n.indexOf("Brad") !== -1) {
           $scope.note = "Jó fej"; 
        }
        else $scope.note = "";
        
    });
    
    $scope.clickHandler = function() {
        $scope.myNote = "Ez neked szól " + $scope.yourName;
    };
}]);

// form controller
mainModule.controller("formCtrl", ["$scope", function($scope) {
    $scope.user = {};
    $scope.egyenleg = 1200;
    $scope.$watchCollection("user", function(n,o) {
     console.log(n,o);   
    });
}]);