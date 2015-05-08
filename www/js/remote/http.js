angular.module('remote.http', [])

.factory('http', ['$http', '$q', function ($http, $q) {
  var self = this;

  self.run = function (req) {
    var deferred = $q.defer();
    $http(req).
    success(function (result) {
      deferred.resolve(result);
    }).
    error(function (err) {
      deferred.reject(err);
    });
    return deferred.promise;
  }

  return self;
}])