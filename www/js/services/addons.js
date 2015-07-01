angular.module('service.addons', [])
  //.factory('getUserUsage', ['config', 'http', 'db', '$q', function (config, http, db, $q) {
  .factory('addons', ['$q', 'db', function ($q, db) {
    var self = this;

    self.save = function () {
      return $q(function (resolve, reject) {
        var addons = [
          {
            name: '1 GB Internet',
            isChecked: true
          },
          {
            name: '3 GB Internet',
            isChecked: false
          },
          {
            name: '5 GB Internet',
            isChecked: false
          },
          {
            name: 'GECE 5 GB**',
            isChecked: false
          },
          {
            name: 'Avea Smartband',
            isChecked: false
          },
          {
            name: 'Samsung Galaxy Gear S',
            isChecked: false
          },
          {
            name: 'Samsung Galaxy Gear Fit',
            isChecked: false
          },
          {
            name: 'Jam Classic Hoparlör',
            isChecked: false
          },
          {
            name: 'Avea inTouch 4',
            isChecked: false
          },
          {
            name: 'iPad Mini Retina 16 GB',
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

    self.get = function () {
      return $q(function (resolve, reject) {
        db.get('AddOns').then(function (result) {
          resolve(JSON.parse(result[0].data));
        }, function (err) {
          reject(err);
        });
      });
    }

    return self;
}])