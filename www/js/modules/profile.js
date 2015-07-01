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
    })
})

.controller('ProfileCtrl', function ($scope, $cordovaDialogs, $state, $ionicModal, addons, db) {
  $scope.addons = {
    checked: ''
  };

  $scope.logOut = function () {
    $cordovaDialogs.confirm('Are you sure you want to exit?', 'Confirm', ['Yes', 'No']).then(function (buttonIndex) {
      var btnIndex = buttonIndex;
      if (btnIndex === 1) {
        $state.go('login');
      }
    });
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

  $scope.onDoneAddons = function () {
    console.log('onDone');
    $scope.modalAddons.hide();
  }

  $scope.onCancelAddons = function () {
    console.log('onCancel');
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

  $scope.onDoneCurrentPage = function () {
    console.log('onDone');
    $scope.modalCurrentPage.hide();
  }

  $scope.onCancelCurrentPage = function () {
    console.log('onCancel');
    $scope.modalCurrentPage.hide();
  }

  $scope.buyNow = function () {
    $scope.addonsData.forEach(function (item) {
      if (item.isChecked) item.isChecked = false;
    });
    
    $scope.addonsData.forEach(function (item) {
      if (item.name == $scope.addons.checked) item.isChecked = true;
    });

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
    result.forEach(function (item) {
      if (item.isChecked) {
        $scope.addons.checked = item.name;
        return;
      }
    });
  });

})