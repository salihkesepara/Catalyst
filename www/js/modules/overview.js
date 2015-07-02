angular.module('module.overview', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.overview', {
      url: '/overview',
      cache: false,
      views: {
        'tab-overview': {
          templateUrl: 'views/tab-overview.html',
          controller: 'OverviewCtrl'
        }
      }
    });
})


.controller('OverviewCtrl', function ($scope, $rootScope, overview, $state, db, $timeout, loading, $cordovaDialogs) {
  loading.start();
  $timeout(function ()  {
    if (typeof $rootScope.userUsage === 'undefined') {
      db.get('userUsage').then(function (result) {
        $rootScope.userUsage = JSON.parse(result[0].data);
        $('#container').highcharts(overview.data($rootScope.userUsage));
      });
    } else {
      $('#container').highcharts(overview.data($rootScope.userUsage));
    }
    loading.stop();
  }, 1000);
  
});
