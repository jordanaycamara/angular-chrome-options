ChromeOptionsApp.controller('ChromeOptionsHeadController', ['$scope', 'config', function ChromeOptionsHeadController($scope, config) {

  config.then(function (configs) {
    $scope.app_name = configs.app_name;
  });
}]);
