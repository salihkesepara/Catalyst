angular.module('module.settings', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.settings', {
      url: '/settings',
      cache: false,
      views: {
        'tab-settings': {
          templateUrl: 'views/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })
})


.controller('SettingsCtrl', function ($scope, $stateParams, $rootScope, db) {
  if (typeof $rootScope.userUsage === 'undefined') {
    db.get('userUsage').then(function (result) {
      $rootScope.userUsage = JSON.parse(result[0].data);
      addData();
    });
  } else {
    addData();
  }


  function addData() {
    $scope.data = {
      mb: parseInt($rootScope.userUsage.dataUsage) * 1000 / 100,
      sms: parseInt($rootScope.userUsage.smsUsage * 2000 / 100),
      dk: parseInt($rootScope.userUsage.voiceUsage * 500 / 100),
    }
  }
})