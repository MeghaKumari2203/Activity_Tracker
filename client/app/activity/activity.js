'use strict';

angular.module('activityTrackerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newactivity', {
        url: '/newActivity',
        templateUrl: 'app/activity/activity-new.html',
        controller: 'ActivityNewCtrl',
        authenticate:true
      })
      .state('viewActivity', {
        url: '/activityView/:id',
        templateUrl: 'app/activity/activity-view.html',
        controller: 'ActivityViewCtrl',
        authenticate:true
      })
      .state('listactivity', {
        url: '/activityList',
        templateUrl: 'app/activity/activity-list.html',
          controller: 'AllCtrl',
          authenticate:true
      })
       .state('a', {
        url: '/a',
        templateUrl: 'app/activity/welcome.html',
          controller: 'MainCtrl',
      })
  });
