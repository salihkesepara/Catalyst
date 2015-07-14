angular.module('module.login', [])

.controller('LoginCtrl', ['$scope', 'loading', '$state', 'getUserUsage', 'getUserUsageAll', '$cordovaDialogs', '$rootScope', 'db', 'addons', 'touchId', '$ionicHistory', function ($scope, loading, $state, getUserUsage, getUserUsageAll, $cordovaDialogs, $rootScope, db, addons, touchId, $ionicHistory) {
  $scope.showFingerPrintImage = false;

  $scope.login = {
    id: ''
  };
  
  touchId.check().then(function (result) {
    console.log(result);
    $scope.showFingerPrintImage = true;
    if ($rootScope.touchIdisShow) return;
    $rootScope.touchIdisShow = true;
    touchON();
  }, function (err) {
    console.log(err);
  });
  
  function touchON() {
    touchId.run().then(function (result) {
      console.log(result);
      $scope.login.id = 1025;
      goHome();
    }, function (err) {
      console.log(err);
    });
  }

  $scope.touchON = function () {
    return touchON();
  }

  $scope.goHome = function () {
    if ($scope.login.id === '' || $scope.login.id === null) {
      $cordovaDialogs.alert('Subscriber is required', 'Alert', 'OK');
      return;
    }
    goHome();
  };

  function goHome() {
    loading.start();

    var isUsageOk = false,
      isUsageAllOk = false;

    addons.save().then(function (result) {
      console.log(result);
    });

    getUserUsage.run($scope.login.id).then(function (result) {
      userUsageOK(result);
    }, function (err) {
      console.log("loading.stop();");
      loading.stop();
      console.log('getUserUsage FAILD!');
      db.get('userUsage').then(function (result) {
        if (result.length !== 0) {
          userUsageOK(JSON.parse(result[0].data));
        } else {
          $cordovaDialogs.alert('Check your network!', 'Alert', 'OK');
        }
      });
    });

    getUserUsageAll.run($scope.login.id).then(function (result) {
      userUsageAllOK(result);
    }, function (err) {
      console.log('getUserUsageAll FAILD!');
      db.get('userUsageAll').then(function (result) {
        console.log("loading.stop();");
        loading.stop();
        if (result !== 0) {
          userUsageAllOK(JSON.parse(result[0].data));
        }
      });
    });

    function userUsageOK(result) {
      console.log(result);
      $rootScope.userUsage = result;
      isUsageOk = true;
      if (isUsageAllOk) {
        goOverview();
      }
    }

    function userUsageAllOK(result) {
      console.log(result);
      $rootScope.userUsageAll = result.periodUsage;
      isUsageAllOk = true;
      if (isUsageOk) {
        goOverview();
      }
    }

    function goOverview() {
      $scope.login.id = '';
      loading.stop();
      $state.go('tab.overview');
    }
  }
}]);