angular.module('module.overview', [])

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
