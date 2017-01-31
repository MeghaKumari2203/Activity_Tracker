angular.module('activityTrackerApp').factory('Activity',
    function ($resource) {
        return $resource('/api/activities/:id', null,
            {
                'update': { method: 'PUT' }
            }
        );
    }); 