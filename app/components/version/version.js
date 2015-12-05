'use strict';

angular.module('quizzCode.version', [
  'quizzCode.version.interpolate-filter',
  'quizzCode.version.version-directive'
])

.value('version', '0.0.1');
