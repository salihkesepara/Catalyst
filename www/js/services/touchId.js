angular.module('service.touchId', [])

.factory('touchId', ['$cordovaTouchID', '$q', function ($cordovaTouchID, $q) {
  var self = this;

  self.run = function () {
    return $q(function (resolve, reject) {
      $cordovaTouchID.authenticate("To login, please scan your saved fingerprint").then(function () {
        resolve(true);
      }, function () {
        reject(false);
      });
    });
  }

  self.check = function () {
    return $q(function (resolve, reject) {
      document.addEventListener('deviceready', function () {
        console.log('device.platform: ', device.platform);
        if (device.platform == 'iOS') {
          $cordovaTouchID.checkSupport().then(function () {
            console.log('Touch ID is Active!');
            resolve(true);
          }, function (err) {
            reject('Touch ID is not Active!');
          });
        } else {
          reject('Touch ID is not Active!');
        }
      }, false);
    });
  }

  return self;
}])