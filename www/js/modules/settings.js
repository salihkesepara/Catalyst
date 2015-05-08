angular.module('module.settings', [])

.config(function($stateProvider, $urlRouterProvider) {
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


.controller('SettingsCtrl', function($scope, $stateParams) {
  
})