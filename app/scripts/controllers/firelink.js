'use strict';

/**
 * @ngdoc function
 * @name lunchrecsApp.controller:FirelinkCtrl
 * @description
 * # FirelinkCtrl
 * Controller of the lunchrecsApp
 */
// angular.module('lunchrecsApp', ['firebase'])
//   .controller('FirelinkCtrl', function ($scope, $firebaseObject) {
//     var ref = new Firebase('https://lunchrecs.firebaseio.com/places');
//     $scope.places = $firebaseObject(ref);
//     $scope.places.addMe = function(){
//       console.log('hello');
//       $scope.places.$add({name: 'Chipotle'});
//     }
//   });


angular.module('lunchrecsApp', ['firebase'])
  .controller('FirelinkCtrl', function($scope, $firebaseArray){
    var ref = new Firebase('https://lunchrecs.firebaseio.com/places');
    $scope.places = $firebaseArray(ref);
    $scope.addPlace = function(){
      console.log('hello');
      $scope.places.$add({
        text: 'Chipotle'
      });
    }
  });
//