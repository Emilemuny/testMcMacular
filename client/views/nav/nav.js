'use strict';

angular.module('angular-prototype')
  .controller('NavCtrl', ['$rootScope', '$scope', '$state', 'User', function($rootScope, $scope, $state, User){
    $scope.logout = function(){
      User.logout().then(function(){
        delete $rootScope.email;
        $state.go('home');
      });
    };
  }]);
