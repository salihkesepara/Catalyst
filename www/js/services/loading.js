angular.module('services.loading', [])

.factory('loading', ['$ionicLoading', function ($ionicLoading) {

  function start() {
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
  }
  
  function stop() {
    $ionicLoading.hide();
  }

  return {
    start: start,
    stop: stop
  };
}])