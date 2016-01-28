/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var ggPortfoControllers = angular.module('ggPorfoControllers', []);

ggPortfoControllers.controller('ProjectListCtrl',['$scope',
	function($scope){
		
		
}]);

ggPortfoControllers.controller('ProjectDetailCtrl',['$scope', '$routeParams',
	function($scope, $routeParams){
		
		$scope.projectId = $routeParams.projectId;
		
}]);