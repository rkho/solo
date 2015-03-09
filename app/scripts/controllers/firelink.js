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
  .controller('FirelinkCtrl', function($scope, $firebaseArray, $http){
    var ref = new Firebase('https://lunchrecs.firebaseio.com/places');
    var placesArr = [];
    $scope.places = $firebaseArray(ref);
    $scope.addPlace = function(){
      $scope.places.$add({
        text: 'Chipotle'
      });
    }
    $scope.getPlace = function(){
      // $http({method: 'JSON', url: 'https://lunchrecs.firebaseio.com/places'})
      //   .success(function(data, status){
      //     console.log(data);
      //   })
      jQuery.getJSON('https://lunchrecs.firebaseio.com/places.json', function(data){
        _.each(data, function(elem){
          console.log(elem.text);
        })
      });
      };
  });
//