angular.module('module.tabs', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "views/tabs.html"
    })
});