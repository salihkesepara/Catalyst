angular.module('module.login', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
})

.controller('LoginCtrl', ['$scope', 'loading', '$state', 'getUserUsage', 'getUserUsageAll', '$rootScope', 'db', function ($scope, loading, $state, getUserUsage, getUserUsageAll, $rootScope, db) {
  $scope.goHome = function () {
    loading.start();

    var isUsageOk = false,
      isUsageAllOk = false;

    getUserUsage.run().then(function (result) {
      userUsageOK(result);
    }, function (err) {
      console.log(err);
      db.get('userUsage').then(function (result) {
        if (result.length == 0) {
          loading.stop();
        } else {
          userUsageOK(JSON.parse(result[0].data));
        }
      });
    });

    getUserUsageAll.run().then(function (result) {
      userUsageAllOK(result);
    }, function (err) {
      console.log(err);
      db.get('userUsageAll').then(function (result) {
        if (result == 0) {
          loading.stop();
        } else {
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
      $rootScope.isUsageAllOk = result;
      isUsageAllOk = true;
      if (isUsageOk) {
        goHome();
      }
    }

    function goHome() {
      loading.stop();
      $state.go('tab.overview');
    }
  }
}])