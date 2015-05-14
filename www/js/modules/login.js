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
  $scope.login = {
    id: ''
  }
  $scope.goHome = function () {
    if ($scope.login.id == '') {

      alert('Subscriber ID is required!');
     return;

      alert('Subscriber is required!');
      return;

  };
    loading.start();

    var isUsageOk = false,
      isUsageAllOk = false;

    getUserUsage.run().then(function (result) {
      userUsageOK(result);
    }, function (err) {
      console.log("loading.stop();");
      loading.stop();
      console.log(err);
      db.get('userUsage').then(function (result) {
        if (result.length != 0) {
          userUsageOK(JSON.parse(result[0].data));
        }
      });
    });

    getUserUsageAll.run().then(function (result) {
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