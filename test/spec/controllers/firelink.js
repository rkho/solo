'use strict';

describe('Controller: FirelinkCtrl', function () {

  // load the controller's module
  beforeEach(module('lunchrecsApp'));

  var FirelinkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirelinkCtrl = $controller('FirelinkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
