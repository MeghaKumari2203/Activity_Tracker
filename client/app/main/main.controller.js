'use strict';

angular.module('activityTrackerApp')
  .controller('MainCtrl', function($scope, $http, socket,$mdDialog,Auth,$state,Activity) {
    $scope.isLoggedIn=Auth.isLoggedIn();
    if($scope.isLoggedIn){
      $state.go('a');
    }
    else{
      $state.go('main');
    }
	$scope.IsVisible = false;
	$scope.loginvisible = true;
	$scope.ShowHide = function () {                
		$scope.IsVisible = $scope.IsVisible ? false : true;
		$scope.loginvisible = false;
	}   
	$scope.ShowHideLogin = function () {                
		$scope.loginvisible =$scope.loginvisible ? false : true;
		$scope.IsVisible = false;
	}   
  
  $scope.activity = {};
    $scope.activity.user = Auth.getCurrentUser();
    if($scope.isLoggedIn){
    $http.get('/api/activities/getUserActi/' + $scope.activity.user._id)
      .then(function (activity) {
        $scope.activities = activity.data;
      });
    };
    $scope.deleteActivity = function (act) {
     act.deleted = 0;
      return Activity.update({ id: act._id },act).$promise
      .then(function success(/* value, responseHeaders */) {
          debugger;
          $state.go('a');
        }, errorHandler($scope));
    };

  $scope.goToActivity = function(act, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title(act.actName+" Created On "+act.activityDate)
        .textContent(act.actDesc)
        .ariaLabel('Person inspect demo')
        .ok('OK!')
        .targetEvent(event)
    );
  };

  $scope.navigateTo = function(to, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Imagine being taken to ' + to)
        .ariaLabel('Navigation demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

  $scope.doPrimaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Primary Action')
        .textContent('Primary actions can be used for one click actions')
        .ariaLabel('Primary click demo')
        .ok('Awesome!')
        .targetEvent(event)
    );
  };

  $scope.doSecondaryAction = function(event) {
    
	 $scope.showConfirm();
  };
  $scope.showConfirm = function(act,ev) {
    debugger;
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like to delete your task?')
          .textContent('')
          .ariaLabel('')
          .targetEvent(ev)
          .ok('Delete')
          .cancel('Cancel');

    $mdDialog.show(confirm).then(function(act) {
     // $scope.status = 'You decided to get rid of your debt.';
    }, function() {
    //  $scope.status = 'You decided to keep your debt.';
    });
  };

	  
    var originatorEv;

    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };  

     });
       







