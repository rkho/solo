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

      var randomNum;
      $scope.chosenPlace;
      jQuery.getJSON('https://lunchrecs.firebaseio.com/places.json', function(data){
        randomNum = parseInt(Math.random()*(Object.keys(data).length));
        $scope.chosenPlace = data[Object.keys(data)[randomNum]];
        $scope.chosenPlace.key = Object.keys(data)[randomNum];
        console.log($scope.chosenPlace.key);
      });
    };

    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
    $scope.getAndToggle = function(){
      $scope.getPlace();
      $scope.toggleModal();
    }

    $scope.addTip = function(string){
      console.log($scope.chosenPlace);
      var key = $scope.chosenPlace.key
      var updateMe = new Firebase('https://lunchrecs.firebaseio.com/places/' + key);
      updateMe.update({tips: string});
    }
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