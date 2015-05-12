angular.module('service.overview', [])

.factory('overview', [function () {
  function data(userUsage) {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 50
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -80,
            style: {
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0px 1px 2px black'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['47%', '75%']
        }
      },
      series: [{
        type: 'pie',
        name: '',
        innerSize: '50%',
        data: [
              [parseInt(userUsage.dataUsage) * 1000 / 100 + ' MB Int', parseInt(userUsage.dataUsage)],
              [parseInt(userUsage.smsUsage * 2000 / 100) + ' SMS', parseInt(userUsage.smsUsage)],
              [parseInt(userUsage.voiceUsage) * 10 + ' DK Arama', parseInt(userUsage.voiceUsage)],
            ]
        }]
    }
  }

  return {
    data: data
  }
}])