angular.module('module.overview', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.overview', {
      url: '/overview',
      views: {
        'tab-overview': {
          templateUrl: 'views/tab-overview.html',
          controller: 'OverviewCtrl'
        }
      }
    })
})


.controller('OverviewCtrl', function ($scope, $rootScope, overview, $state) {
  var userUsage = $rootScope.userUsage;
  $scope.data = $(window).width();
  $('#container').highcharts(overview.data(userUsage));

  $scope.goLogin = function() {
    $state.go('login');
  }
})