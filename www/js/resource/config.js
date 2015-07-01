angular.module('resource.config', [])
.constant('database', {
  name: 'catalystDB',
  tables: [
    {
      // This config table is necessary!
      name: 'config',
      columns: [
        {name: 'id', type: 'integer primary key'},
        {name: 'key', type: 'text'},
        {name: 'value', type: 'text'}
      ]
    },
    {
      name: 'UserUsage',
      columns: [
        {name: 'id', type: 'text'},
        {name: 'data', type: 'text'}
      ]
    },
    {
      name: 'UserUsageAll',
      columns: [
        {name: 'id', type: 'text'},
        {name: 'data', type: 'text'}
      ]
    }
  ]
})

.constant('migration', [
  {
    migration: 1,
    name: 'catalystDB',
    tables: [
      {
        name: 'AddOns',
        columns: [
          {name: 'id', type: 'text'},
          {name: 'data', type: 'text'}
        ]
      },
    ]
  },
]);
