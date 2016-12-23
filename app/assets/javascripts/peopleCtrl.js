/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.message = "Hello!";

    window.$scope = $scope;
  });

})();