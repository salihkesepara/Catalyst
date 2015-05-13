angular.module('service.overview', [])

.factory('overview', [function () {
  function data(userUsage) {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      colors: ['#f3742a', '#387ef5', '#8bbc21'],
      title: {
        text: '%' + parseInt(userUsage.dataUsage) + '<br>İnternet',
        align: 'center',
        verticalAlign: 'middle',
        y: 50,
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0px 1px 2px black'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
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