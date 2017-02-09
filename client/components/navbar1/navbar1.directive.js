'use strict';

angular.module('activityTrackerApp')
  .directive('navbar1', function () {
    return {
      templateUrl: 'components/navbar1/navbar1.html',
      restrict: 'E',
      controller: 'NavbarCtrl'
    };
  });
