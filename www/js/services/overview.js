angular.module('service.overview', [])

.factory('overview', [function () {
  function data(userUsage) {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      colors: ['#f3742a', '#387ef5', '#8bbc21'],
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 50
      },
      tooltip: {
//        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        enabled: false
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
              ['%' + parseInt(userUsage.dataUsage), parseInt(userUsage.dataUsage)],
              ['%' + parseInt(userUsage.smsUsage), parseInt(userUsage.smsUsage)],
              ['%' + parseInt(userUsage.voiceUsage), parseInt(userUsage.voiceUsage)],
            ]
        }]
    }
  }

  return {
    data: data
  }
}])