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

.controller('DetailsCtrl', function ($scope, detail) {
  $('#containerDetails').highcharts(detail.data());
})