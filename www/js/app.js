angular.module('app', ['service.injects', 'ngCordova'])

.run(function ($ionicPlatform, db, $ionicHistory, $state, $cordovaDialogs, $cordovaStatusbar) {
  ionic.Platform.isFullScreen = true;
  $ionicPlatform.registerBackButtonAction(function () {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    if ($ionicHistory.currentStateName() === "login") {
      navigator.app.exitApp();
    } else {
      $cordovaDialogs.confirm('Are you sure you want to exit?', 'Confirm', ['Yes', 'No'])
        .then(function (buttonIndex) {

          var btnIndex = buttonIndex;
          if (btnIndex === 1) {

            $state.go('login');
          }
        });
    }
  }, 100);
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      screen.lockOrientation('portrait-primary');
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
      $cordovaStatusbar.overlaysWebView(true);
    }

    db.init().then(function (result) {
      console.log('DB Loaded!');
    }, function (err) {
      console.log(err);
    });
  });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('').previousTitleText(false);
  if (!ionic.Platform.isIOS()) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
  }
  $urlRouterProvider.otherwise("/login");
});