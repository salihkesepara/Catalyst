angular.module('service.nav', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      cache: false,
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "views/tabs.html"
    })
})

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

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.overview', {
      url: '/overview',
      cache: false,
      views: {
        'tab-overview': {
          templateUrl: 'views/tab-overview.html',
          controller: 'OverviewCtrl'
        }
      }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab.profile', {
      url: '/profile',
      cache: false,
      views: {
        'tab-profile': {
          templateUrl: 'views/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    });
})

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

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('').previousTitleText(false);
  if (!ionic.Platform.isIOS()) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
  }
  $urlRouterProvider.otherwise("/login");
});
