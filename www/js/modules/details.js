angular.module('module.details', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.details', {
      url: '/details',
      cache: false,
      views: {
        'tab-details': {
          templateUrl: 'views/tab-details.html',
          controller: 'DetailsCtrl'
        }
      }
    })
})

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

  $scope.logOut = function () {
    $cordovaDialogs.confirm('Are you sure you want to exit?', 'Confirm', ['Yes', 'No']).then(function (buttonIndex) {
      var btnIndex = buttonIndex;
      if (btnIndex === 1) {
        $state.go('login');
      }
    });
  }
})