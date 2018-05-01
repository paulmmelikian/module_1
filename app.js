(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckControlleroller($scope) {
      $scope.input = "";
      $scope.message = "";
        $scope.myStyle ={};

      $scope.checkConsumption = function () {
        if($scope.input ==""){
            $scope.message ="Please enter data first";
     
        } else{
        var arr = $scope.input.split(',');
        var count =  arr.filter(String).length;
        if (count <=3 ) {
          $scope.message =   "Enjoy!";
        }else {
          $scope.message =   "Too Much!";
        }
      }
    };
  }

})();