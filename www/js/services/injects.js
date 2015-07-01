angular.module('service.injects', [
  'ionic',
  
  // Module
  'module.overview',
  'module.details',
  'module.settings',
  'module.login',
  'module.tabs',
  'module.profile',
  
  // Service
  'service.detail',
  'service.injects',
  'services.loading',
  'service.overview',
  'service.addons',
  
  // Resource
  'resource.config',
  'resource.db',
  'resource.init',
  
  // Remote
  'remote.config',
  'remote.http',
  
  // Request
  'request.getUserUsage',
  'request.getUserUsageAll',
])