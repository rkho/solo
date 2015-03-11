angular.module('lunchRecs')
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ])
  .controller('FirebaseCtrl', ['$scope', '$firebaseArray', '$http', function($scope, $firebaseArray, $http){
    var ref = new Firebase('https://lunchrecs.firebaseio.com/places');
    var placesObj = {};
    $scope.places = $firebaseArray(ref);
    $scope.showModal = false;

    $scope.addPlace = function(name, tips, distance, price, yelp, maps, image){
      if (name && tips && distance && price && yelp && maps && image){
        $scope.places.$add({
          text: name,
          tips: tips,
          distance: distance,
          price: price,
          yelplink: yelp,
          directions: maps,
          image: image
        });
        swal("Thanks!", "Your place has been added!", "success");
        $scope.placeName='';
        $scope.placeTips='';
        $scope.placePrice='';
        $scope.placeYelp='';
        $scope.placeMaps='';
        $scope.placeImage=''
      }
      else{
        swal("Whoops!", "You're missing a field!", "error");
      }
    }

    $scope.getPlace = function(){
      var randomNum;
      $scope.chosenPlace;
      jQuery.getJSON('https://lunchrecs.firebaseio.com/places.json', function(data){
        randomNum = parseInt(Math.random()*(Object.keys(data).length));
        $scope.chosenPlace = data[Object.keys(data)[randomNum]];
        $scope.chosenPlace.key = Object.keys(data)[randomNum];
      });
    };

    $scope.getListOfPlaces = function(){
      jQuery.getJSON('https://lunchrecs.firebaseio.com/places.json', function(data){
        _.each(data, function(key){
          if (!placesObj[key.text]){
            placesObj[key.text] = true;
          }
        })
        console.log(placesObj);
      })
      // console.log(placesObj);
    }

    $scope.toggleModal = function(){
      $scope.showModal = !$scope.showModal;
    };
    $scope.getAndToggle = function(){
      $scope.getPlace();
      $scope.toggleModal();
    };

    $scope.addTip = function(string){
      if (string === undefined || string === ''){
        swal('Whoops!', 'You need to write something first!', 'error')
      }
      else {
      var key = $scope.chosenPlace.key
      var updateMe = new Firebase('https://lunchrecs.firebaseio.com/places/' + key);
      $scope.chosenPlace.tips = string;
      updateMe.update({tips: string});
      // updateMe.$save();
      swal("Thanks!", "Your tip has been added!", "success")
      }
    };
    $scope.yelpSearch = function(string){
      $http({
        url: '/api/list',
        method: "GET",
        params: {term: string}
      })
      .success(function(data){
        console.log(data);
      })
    }
    // $scope.yelpSearch = function(name){
    //   $http.get("http://api.yelp.com/v2/search?term=" + name + "&location=94102&cll=37.783624,-122.408999&limit=10&category_filter=restaurants&callback=datacb"
    //   ).then(function(data){
    //     console.log(data);
    //   })
    // }
  }])
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