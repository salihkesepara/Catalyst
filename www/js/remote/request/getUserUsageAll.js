angular.module('request.getUserUsageAll', ['remote.config', 'remote.http'])

.factory('getUserUsageAll', ['config', 'http', 'db', '$q', function (config, http, db, $q) {
  var self = this;

  self.run = function ()  {
    function parserCallBack(result) {
      return saveDB(result);
    }

    function saveDB(result) {
      var deferred = $q.defer();
      db.remove('UserUsageAll').then(function () {
        db.save('UserUsageAll', ['id', 'data'], [db.UUID(), JSON.stringify(result)]).then(function (success) {
          deferred.resolve(result);
        }, function (err) {
          deferred.reject(err);
        });
      });

      return deferred.promise;
    }

    return http.run(config.getUserUsageAll).then(parserCallBack);
  }

  return self;
}])