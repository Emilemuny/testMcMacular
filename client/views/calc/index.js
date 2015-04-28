'use strict';

angular.module('angular-prototype')
  .controller('bodyCtrl', ['$scope', function($scope){
      $scope.show = 0;
    $scope.submit = function(body){
      var bmi = body.mass / (body.height * body.height);
      $scope.answer = bmi.toFixed(2);
      $scope.overorunder = verdict(bmi);
      $scope.show = 1;
    };

     function verdict(bmi){
       var sol;
       if(bmi < 18.5){ sol = 'Your BMI shows Underweight';}
       else if (bmi >= 18.5 && bmi < 25) { sol = 'Your BMI shows Healthy weight(normal)';}
       else { sol = 'Your BMI shows Overweight';}

       return sol;
     }

  }]);
