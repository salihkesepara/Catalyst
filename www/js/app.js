angular.module('app', ['service.injects','ngCordova'])

.run(function ($ionicPlatform, db,$ionicViewService,$ionicHistory,$state) {
      $ionicPlatform.registerBackButtonAction(function () {


        if($ionicHistory.currentStateName()==="login"){
            navigator.app.exitApp();
        }

          $ionicViewService.nextViewOptions({
              disableBack: true
          });
          $state.go('login');

      }, 100);
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
      $httpProvider.defaults.timeout = 5000;
    }]);
