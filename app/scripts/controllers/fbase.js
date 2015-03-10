angular.module('lunchRecs')
  .controller('FirebaseCtrl', function($scope, $firebaseArray){
    var ref = new Firebase('https://lunchrecs.firebaseio.com/places');
    var placesArr = [];
    $scope.places = $firebaseArray(ref);
    $scope.addPlace = function(){
      $scope.places.$add({
        text: 'Chipotle'
      });
    }
    $scope.getPlace = function(){
      jQuery.getJSON('https://lunchrecs.firebaseio.com/places.json', function(data){
        _.each(data, function(elem){
          console.log(elem.text);
        })
      });
    };
    $scope.showModal = false;
    $scope.toggleModal = function(){
        console.log('hi!')
        $scope.showModal = !$scope.showModal;
    };
  })
  .directive('modal', function(){
    return {
      templateUrl: 'views/modal.html',
      restrict: 'E',
      replace: true,
      link: function (scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
      }
    });