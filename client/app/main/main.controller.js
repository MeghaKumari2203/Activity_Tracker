'use strict';

angular.module('activityTrackerApp')
  .controller('MainCtrl', function($scope, $http, socket,$mdDialog) {
 
 



//   var app = angular.module('myApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages']);
// app.controller('myController', function ($scope,$mdDialog) { 
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
  $scope.people = [
    { name: 'Janet Perkins', newMessage: true },
    { name: 'Mary Johnson',  newMessage: false },
    { name: 'Peter Carlsson', newMessage: false }
  ];

  $scope.goToPerson = function(person, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Inspect ' + person)
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
  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like to delete your task?')
          .textContent('')
          .ariaLabel('')
          .targetEvent(ev)
          .ok('Delete')
          .cancel('Cancel');

    $mdDialog.show(confirm).then(function() {
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
       







