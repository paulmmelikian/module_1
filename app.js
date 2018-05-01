(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.message = "";
        $scope.myStyle ={};
      console.log("This is happening");
      $scope.checkConsumption = function () {
        console.log("The function is entered");
        if($scope.input ==""){
            $scope.message ="Please enter data first";
     
        } else{
        var arr = $scope.input.split(',');
        var count =  arr.filter(String).length;
        if (count <=3 ) {
          $scope.message = "Enjoy!";
        }else {
          $scope.message = "Too Much!";
        }
      }
    };
  }

})();