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
					.state('project-list.summary', {
		url: "/:projectId",
		templateUrl: 'partials/project-summary.html',
		controller: 'ProjectSummaryCtrl'
	})
					.state('project-detail', {
		url: "/project",
		templateUrl: 'partials/project-detail.html'
	})
					.state('project-detail.content', {
		url: "/:projectId",
		views: {
//			'summary': {
//				templateUrl: 'partials/project-detail.summary.html',
//				controller: 'ProjectDetailCtrl'
//			},
			'details': {
				templateUrl: function($stateParams) {
					return 'partials/projects/' + $stateParams.projectId + '.html';
				}, //'partials/projects/:projectId.html',
				controller: 'ProjectDetailCtrl'

			}
		}
	})
					;

});

