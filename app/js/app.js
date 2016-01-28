'use strict';

// Declare app level module which depends on views, and components
var ggPortfoApp = angular.module('myApp', [
	'ngRoute',
	'myApp.view1',
	'myApp.view2',
	'myApp.version',
	'ggPorfoControllers'
]).
				config(['$routeProvider', function($routeProvider) {
		$routeProvider.
						when('/projects', {
			templateUrl: 'partials/project-list.html',
			controller: 'ProjectListCtrl'
		}).
						when('/project/:projectId', {
			templateUrl: 'partials/project-detail.html',
			controller: 'ProjectDetailCtrl'
		}).
						otherwise({redirectTo: '/projects'});
	}]);
