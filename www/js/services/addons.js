angular.module('service.addons', [])
  //.factory('getUserUsage', ['config', 'http', 'db', '$q', function (config, http, db, $q) {
  .factory('addons', ['$q', 'db', function ($q, db) {
    var self = this;

    self.save = function () {
      return $q(function (resolve, reject) {
        var addons = [
          {
            name: 'Premium Voice Package',
            isChecked: true
          },
          {
            name: 'Premium SMS Package',
            isChecked: false
          },
          {
            name: 'Premium Data Package',
            isChecked: false
          },
          {
            name: 'Travel Package',
            isChecked: false
          },
          {
            name: 'Holiday Package',
            isChecked: false
          },
          {
            name: 'Weekend Data Package',
            isChecked: false
          },
          {
            name: 'Weekend SMS Package',
            isChecked: false
          },
          {
            name: 'Weekend Voice Package',
            isChecked: false
          },
      ];

        db.remove('AddOns').then(function () {
          db.save('AddOns', ['id', 'data'], [db.UUID(), JSON.stringify(addons)]).then(function (success) {
            resolve(success);
          }, function (err) {
            reject(err);
          });
        });
      });
    }
    
    self.get = function() {
      return $q(function(resolve, reject) {
        db.get('AddOns').then(function(result) {
          resolve(JSON.parse(result[0].data));
        }, function(err) {
          reject(err);
        });
      });
    }

    return self;
}])