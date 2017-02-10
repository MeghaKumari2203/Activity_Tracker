'use strict';

angular.module('activityTrackerApp')
  .controller('LoginCtrl', function($scope, Auth, $state) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      debugger;
      $scope.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then(function() {
          // Logged in, redirect to activityTracker
          $state.go('a');
        })
        .catch(function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
