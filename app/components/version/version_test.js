'use strict';

describe('quizzCode.version module', function() {
  beforeEach(module('quizzCode.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.0.1');
    }));
  });
});
