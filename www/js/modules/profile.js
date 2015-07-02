angular.module('module.profile', [])

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

.controller('ProfileCtrl', function ($scope, $cordovaDialogs, $state, $ionicModal, addons, db) {
  $scope.addons = {
    checked: '',
  };

  $ionicModal.fromTemplateUrl('addons-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modalAddons) {
    $scope.modalAddons = modalAddons;
  });

  $scope.openModalAddons = function () {
    $scope.modalAddons.show();
  };

  $scope.onCancelAddons = function () {
    console.log('onCancelAddons');
    $scope.modalAddons.hide();
  }

  $ionicModal.fromTemplateUrl('current-page-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modalCurrentPage) {
    $scope.modalCurrentPage = modalCurrentPage;
  });

  $scope.openModalCurrentPage = function () {
    $scope.modalCurrentPage.show();
  };

  $scope.onCancelCurrentPage = function () {
    console.log('onCancelCurrentPage');
    $scope.modalCurrentPage.hide();
  }

  $scope.buyNow = function (index) {
    $scope.addonsData.forEach(function(item) {
      if (item.isChecked) item.isChecked = false;
    });
    $scope.addonsData[index].isChecked = true;
    $scope.currentAddonsData = $scope.addonsData[index];
    db.update('AddOns', ['data'], [JSON.stringify($scope.addonsData)]).then(function (result) {
      $cordovaDialogs.alert('Your SMS package is now activated', 'Alert', 'OK');
      $scope.modalAddons.hide();
    }, function (err) {
      console.log(err);
      $cordovaDialogs.alert('DB Error', 'Failed', 'OK');
    });
  }

  addons.get().then(function (result) {
    $scope.addonsData = result;
    $scope.addonsData.forEach(function(item) {
      if (item.isChecked) {
        $scope.currentAddonsData = item;
      }
    });
  });

})
