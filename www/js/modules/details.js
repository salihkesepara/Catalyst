angular.module('module.details', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.details', {
      url: '/details',
      views: {
        'tab-details': {
          templateUrl: 'views/tab-details.html',
          controller: 'DetailsCtrl'
        }
      }
    })
})

.controller('DetailsCtrl', function ($scope, $rootScope, detail, db) {
  if (typeof $rootScope.userUsageAll === 'undefined') {
    db.get('userUsageAll').then(function (result) {
      $rootScope.userUsageAll = JSON.parse(result[0].data);
      console.log($rootScope.userUsageAll);
      $('#containerInternet').highcharts(detail.internet($rootScope.userUsageAll.periodUsage));
      $('#containerSms').highcharts(detail.sms($rootScope.userUsageAll.periodUsage));
      $('#containerArama').highcharts(detail.arama($rootScope.userUsageAll.periodUsage));
    });
  } else {
    $('#containerInternet').highcharts(detail.internet($rootScope.userUsageAll));
    $('#containerSms').highcharts(detail.sms($rootScope.userUsageAll));
    $('#containerArama').highcharts(detail.arama($rootScope.userUsageAll));
  }
})