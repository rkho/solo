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