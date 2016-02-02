'use strict';

// Declare app level module which depends on views, and components
var ggPortfoApp = angular.module('myApp', [
//	'ngRoute',
	'ui.router',
	'ngAnimate',
	'ui.bootstrap',
	'myApp.version',
	'ggPorfoControllers'
]);
//				config(['$routeProvider', function($routeProvider) {
//		$routeProvider.
//						when('/home', {
//			templateUrl: 'partials/project-list.html',
//			controller: 'ProjectListCtrl'
//		}).
//						when('/projects', {
//			templateUrl: 'partials/project-list.html',
//			controller: 'ProjectListCtrl'
//		}).
//						when('/project/:projectId', {
//			templateUrl: 'partials/project-detail.html',
//			controller: 'ProjectDetailCtrl'
//		}).
//						otherwise({redirectTo: '/home'});
//	}]).


ggPortfoApp.config(function($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/home");
		//
		// Now set up the states
		$stateProvider
						.state('home', {
			url: "/home",
			templateUrl: "partials/project-list.html",
			controller: 'ProjectListCtrl'
		})
						.state('project-list', {
			url: "/projects",
			templateUrl: 'partials/project-list.html',
			controller: 'ProjectListCtrl'
		})
						.state('project-detail', {
			url: "/project",
			templateUrl: 'partials/project-detail.html',
			controller: 'ProjectDetailCtrl'
		})
						.state('project-detail.details', {
			url: "/:projectId",
			templateUrl: function($stateParams) {
				console.log($stateParams);
				return 'partials/projects/' + $stateParams.projectId + '.html';
			}, //'partials/projects/:projectId.html',
			controller: 'ProjectDetailCtrl'
		})
		;

	});

