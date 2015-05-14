angular.module('service.overview', [])

.factory('overview', [function () {
  function data(userUsage) {
    return {
      chart: {
        type: 'bar',
        height: 250,
        marginTop: 50,
      },
      legend: {
        enabled: false
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: ['Internet', 'SMS', 'Voice'],
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: ''
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray',
          }
        }
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              textShadow: '0 0 3px black'
            }
          }
        },
        series: {
          dataLabels: {
            enabled: true,
            format: '%{y}'
          },
        }
      },
      series: [{
        name: 'Remaining',
        data: [{
          y: 100 - parseInt(userUsage.dataUsage),
          color: '#ccc'
        }, {
          y: 100 - parseInt(userUsage.smsUsage),
          color: '#ccc'
        }, {
          y: 100 - parseInt(userUsage.voiceUsage),
          color: '#ccc'
        }]
        }, {
        name: 'Usage',
        data: [{
          y: parseInt(userUsage.dataUsage),
          color: '#f3742a'
        }, {
          y: parseInt(userUsage.smsUsage),
          color: '#387ef5'
        }, {
          y: parseInt(userUsage.voiceUsage),
          color: '#8bbc21'
        }]
        }]
    }
  }

  return {
    data: data
  }
}])