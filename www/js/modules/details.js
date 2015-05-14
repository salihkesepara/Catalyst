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
      addData($rootScope.userUsageAll.periodUsage);
    });
  } else {
    addData($rootScope.userUsageAll);
  }
  
  function addData(data) {
    $('#containerInternet').highcharts(detail.internet(data));
    $('#containerSms').highcharts(detail.sms(data));
    $('#containerArama').highcharts(detail.arama(data));
  }
})