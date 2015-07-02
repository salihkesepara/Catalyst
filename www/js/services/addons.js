angular.module('service.addons', [])
  //.factory('getUserUsage', ['config', 'http', 'db', '$q', function (config, http, db, $q) {
  .factory('addons', ['$q', 'db', function ($q, db) {
    var self = this;

    self.save = function () {
      return $q(function (resolve, reject) {
        var addons = [
          {
            name: '1GB İnternet',
            description: 'Kaçmaz İkili Paketi ile hem dilediğince',
            img: '1gb.jpg',
            isChecked: true
          },
          {
            name: '2GB İnternet',
            description: 'Turkcell de bir ilk! Bol bol internete',
            img: '2gb.jpg',
            isChecked: false
          },
          {
            name: '4GB İnternet',
            description: 'Platinum Paket Mevcut Müşteri Yıllık',
            img: '4gb.jpg',
            isChecked: false
          },
          {
            name: 'GECE 5 GB**',
            description: 'test',
            img: '2gb.jpg',
            isChecked: false
          }
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
          console.log(JSON.parse(result[0].data));
          resolve(JSON.parse(result[0].data));
        }, function (err) {
          reject(err);
        });
      });
    }

    return self;
}])