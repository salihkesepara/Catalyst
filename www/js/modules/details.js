angular.module('module.details', [])

.controller('DetailsCtrl', function ($scope, $rootScope, detail, db, loading, $timeout, $cordovaDialogs, $state) {
  loading.start();

  $timeout(function () {
    if (typeof $rootScope.userUsageAll === 'undefined') {
      db.get('userUsageAll').then(function (result) {
        $rootScope.userUsageAll = JSON.parse(result[0].data);
        console.log($rootScope.userUsageAll);
        addData($rootScope.userUsageAll.periodUsage);
      });
    } else {
      addData($rootScope.userUsageAll);
    }
    loading.stop();
  }, 500);


  function addData(data) {
    if (angular.isUndefined(data) || !angular.isArray(data)) return;
    $('#containerInternet').highcharts(detail.internet(data));
    $('#containerSms').highcharts(detail.sms(data));
    $('#containerArama').highcharts(detail.arama(data));
  };
})