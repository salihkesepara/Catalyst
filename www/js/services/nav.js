angular.module('service.nav', [])

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      cache: false,
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "views/tabs.html"
    })

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

    .state('tab.overview', {
      url: '/overview',
      cache: false,
      views: {
        'tab-overview': {
          templateUrl: 'views/tab-overview.html',
          controller: 'OverviewCtrl'
        }
      }
    })

    .state('tab.profile', {
      url: '/profile',
      cache: false,
      views: {
        'tab-profile': {
          templateUrl: 'views/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

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

    $ionicConfigProvider.backButton.text('').previousTitleText(false);
    if (!ionic.Platform.isIOS()) {
      $ionicConfigProvider.scrolling.jsScrolling(false);
    }
    $urlRouterProvider.otherwise("/overview");

})
