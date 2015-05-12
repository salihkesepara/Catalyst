angular.module('app', ['service.injects'])

.run(function ($ionicPlatform, db) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }

    db.init().then(function (result) {
      console.log('DB Loaded!');
    }, function (err) {
      console.log(err);
    });
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('').previousTitleText(false);
  if (!ionic.Platform.isIOS()) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
  }
  $urlRouterProvider.otherwise("/login");
}).config(['$httpProvider', function($httpProvider) {
     // $httpProvider.defaults.timeout = 5000;
    }]);