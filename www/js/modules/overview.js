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


.controller('OverviewCtrl', function ($scope, $rootScope, overview, $state, db) {
  if (typeof $rootScope.userUsage === 'undefined') {
    db.get('userUsage').then(function (result) {
      $rootScope.userUsage = JSON.parse(result[0].data);
      $('#container').highcharts(overview.data($rootScope.userUsage));
    });
  } else {
    $('#container').highcharts(overview.data($rootScope.userUsage));
  }

  $scope.goLogin = function () {
    $state.go('login');
  }

  
  $scope.select = function(id) {
    console.log(id);
    var chart = $('#container').highcharts();


  }

})