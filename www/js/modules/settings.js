angular.module('module.settings', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'views/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })
})


.controller('SettingsCtrl', function ($scope, $stateParams, $rootScope) {
  var userUsage = $rootScope.userUsage;
  console.log(userUsage);
  $scope.data = {
    mb: parseInt(userUsage.dataUsage) * 1000 / 100,
    sms: parseInt(userUsage.smsUsage * 2000 / 100),
    dk: parseInt(userUsage.voiceUsage * 500 / 100),
  }
})