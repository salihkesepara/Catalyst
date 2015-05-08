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


.controller('OverviewCtrl', function ($scope, $rootScope) {
  var userUsage = $rootScope.userUsage;
  $('#container').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: '',
      align: 'center',
      verticalAlign: 'middle',
      y: 50
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -80,
          style: {
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0px 1px 2px black'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['47%', '75%']
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
              ['600 MB Int', parseInt(userUsage.dataUsage)],
              ['400 SMS', parseInt(userUsage.smsUsage)],
              ['300 DK Arama', parseInt(userUsage.voiceUsage)],
            ]
        }]
  });


})