'use strict';

/**
 * @ngdoc function
 * @name 201502SoloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 201502SoloApp
 */
angular.module('lunchRecs')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ]);
