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

.controller('DetailsCtrl', function ($scope, $rootScope, detail) {
  var userUsageAll = $rootScope.userUsageAll;


      $('#containerInternet').highcharts(detail.internet(userUsageAll));
  $('#containerSms').highcharts(detail.sms(userUsageAll));
  $('#containerArama').highcharts(detail.arama(userUsageAll));


})