angular.module('service.injects', [
  'ionic',
  
  // Module
  'module.overview',
  'module.details',
  'module.settings',
  'module.login',
  'module.tabs',
  
  // Service
  'service.detail',
  'service.injects',
  'services.loading',
  'service.overview',
  
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