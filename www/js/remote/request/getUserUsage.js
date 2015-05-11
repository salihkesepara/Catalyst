angular.module('request.getUserUsage', [])

.factory('getUserUsage', ['config', 'http', 'db', '$q', function (config, http, db, $q) {
  var self = this;

  self.run = function ()  {
    function parserCallBack(result) {
      return saveDB(result);
    }

    function saveDB(result) {
      var deferred = $q.defer();
      db.remove('UserUsage').then(function () {
        db.save('UserUsage', ['id', 'data'], [db.UUID(), JSON.stringify(result)]).then(function (success) {
          deferred.resolve(result);
        }, function (err) {
          deferred.reject(err);
        });
      });


      return deferred.promise;
    }

    return http.run(config.getUserUsage).then(parserCallBack);
  }

  return self;
}])