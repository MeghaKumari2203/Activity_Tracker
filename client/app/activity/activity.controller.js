'use strict';

var errorHandler;
angular.module('activityTrackerApp')
  .controller('AllCtrl', function ($scope, $http, Auth, Activity,$state, socket,$mdDialog) {
    
    $scope.activity = {};
    $scope.info = "Delete" + $scope.activity.actName;
    $scope.activity.user = Auth.getCurrentUser();
    $http.get('/api/activities/getUserActi/' + $scope.activity.user._id)
      .then(function (activity) {
        $scope.activities = activity.data;
      });
    $scope.deleteActivity = function (actId) {
      debugger;
      $scope.activity = Activity.get({ id:actId});
      $scope.activity.deleted = 0;
      return Activity.update({ id: actId },$scope.activity).$promise
      .then(function success(/* value, responseHeaders */) {
          debugger;
          $state.go('listactivity');
        }, errorHandler($scope));
    };
  })
  .controller('ActivityViewCtrl',
  function ($scope, $state, $stateParams, Activity) {
    $scope.activity = Activity.get({ id: $stateParams.id });
  })
  .controller('ActivityNewCtrl',
  function ($scope, $state, Activity, Auth) {
    $scope.message='';
    $scope.activity = {}; // create a new instance 
    $scope.activity.user = Auth.getCurrentUser();
    $scope.addActivity = function () {
      Activity.save($scope.activity,
        function success(value /*, responseHeaders*/) {
          $state.reload();
           $scope.message="Activity Added Successfully.To Check Move To Other Tabs";
           $scope.activity=null;
        }, errorHandler($scope));
    };
  })
  .controller('ActivityEditCtrl',
  function ($scope, $state, $stateParams, Activity) {
    $scope.activity = Activity.get({ id: $stateParams.id });
    $scope.editActivity = function () {
      Activity.update({ id: $scope.activity._id },
        $scope.activity,
        function success(value /*, responseHeaders*/) {
          $state.go('viewActivity', { id: value._id });
        }, errorHandler($scope));
    };
  });
errorHandler = function ($scope) {
  return function error(httpResponse) {
    $scope.errors = httpResponse;
  };
}; 