'use strict';

describe('myApp.tests module', function() {

  beforeEach(module('myApp.tests'));

  describe('tests controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var testsCtrl = $controller('TestsCtrl');
      expect(testsCtrl).toBeDefined();
    }));

  });
});
