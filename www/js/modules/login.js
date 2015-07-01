angular.module('module.login', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      cache: false,
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
})

.controller('LoginCtrl', ['$scope', 'loading', '$state', 'getUserUsage', 'getUserUsageAll', '$cordovaDialogs', '$rootScope', 'db', 'addons', function ($scope, loading, $state, getUserUsage, getUserUsageAll, $cordovaDialogs, $rootScope, db, addons) {
  $scope.login = {
    id: ''
  }
  $scope.goHome = function () {
    if ($scope.login.id == '' || $scope.login.id == null) {
      $cordovaDialogs.alert('Subscriber is required', 'Alert', 'OK');
      return;
    };
    loading.start();

    var isUsageOk = false,
      isUsageAllOk = false;
    
    addons.save().then(function(result) {
      console.log(result);
    });

    getUserUsage.run($scope.login.id).then(function (result) {
      userUsageOK(result);
    }, function (err) {
      console.log("loading.stop();");
      loading.stop();
      console.log(err);
      db.get('userUsage').then(function (result) {
        if (result.length != 0) {
          userUsageOK(JSON.parse(result[0].data));
        } else {
          $cordovaDialogs.alert('Check your network!', 'Alert', 'OK');
        }
      });
    });

    getUserUsageAll.run($scope.login.id).then(function (result) {
      userUsageAllOK(result);
    }, function (err) {
      console.log(err);
      db.get('userUsageAll').then(function (result) {
        console.log("loading.stop();");
        loading.stop();
        if (result != 0) {
          userUsageAllOK(JSON.parse(result[0].data));
        }
      });
    });
    
    function userUsageOK(result) {
      console.log(result);
      $rootScope.userUsage = result;
      isUsageOk = true;
      if (isUsageAllOk) {
        goHome();
      }
    }

    function userUsageAllOK(result) {
      console.log(result);
      $rootScope.userUsageAll = result.periodUsage;
      isUsageAllOk = true;
      if (isUsageOk) {
        goHome();
      }
    }

    function goHome() {
      $scope.login.id = '';
      loading.stop();
      $state.go('tab.overview');
    }
  }
}])