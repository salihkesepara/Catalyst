angular.module('remote.config', [])

.factory('config', [function () {
  var self = this;
  var baseURL = 'http://195.142.3.135:8080/TmForumMobile/rest/';
  self.data = {
    get: 'GET',
    timeout:10,
    post: 'POST',
    url: {
      getUserUsage: baseURL + 'GetUserUsage/1182329',
      getUserUsageAll: baseURL + 'GetUserUsageAll/1182329'
    }
  }
  
  self.getUserUsage = {
    method: self.data.post,
    url: self.data.url.getUserUsage
  }
  
  self.getUserUsageAll = {
    method: self.data.post,
    url: self.data.url.getUserUsageAll
  }

  return self;
}])