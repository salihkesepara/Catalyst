angular.module('service.detail', [])

.factory('detail', [function () {
  function internet(userUsageAll) {
    var data = [];
    userUsageAll.forEach(function(item) {
      data.push(parseInt(item.dataUsage));
    });
    
    var chart = {
      chart: {
        height: 250
      },
      title: {
        text: 'Internet'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : '1 GB'
      },
      xAxis: {
        type: 'datetime',
        minRange: 14 * 24 * 3600000 // fourteen days
      },
      yAxis: {
        title: {
          text: ''
        },
        max: 2,
        min: 0
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: '',
        pointInterval: 24 * 3600 * 1000,
        pointStart: Date.UTC(2014, 0, 1),
        data: data,
        enableMouseTracking: false
        }]
    }
    
    return chart;
  }
  
  
  
  
  function sms(userUsageAll) {
    var data = [];
    userUsageAll.forEach(function(item) {
      data.push(parseInt(item.smsUsage));
    });
    
    var chart = {
      chart: {
        height: 250
      },
      title: {
        text: 'SMS'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : '1000 ADET'
      },
      xAxis: {
        type: 'datetime',
        minRange: 14 * 24 * 3600000 // fourteen days
      },
      yAxis: {
        title: {
          text: ''
        },
        max: 2,
        min: 0
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: '',
        pointInterval: 24 * 3600 * 1000,
        pointStart: Date.UTC(2014, 0, 1),
        data: data,
        enableMouseTracking: false
        }]
    }
    
    return chart;
  }
  
  function arama(userUsageAll) {
    var data = [];
    userUsageAll.forEach(function(item) {
      data.push(parseInt(item.voiceUsage));
    });
    
    var chart = {
      chart: {
        height: 250
      },
      title: {
        text: 'Arama'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : '2000 DK'
      },
      xAxis: {
        type: 'datetime',
        minRange: 14 * 24 * 3600000 // fourteen days
      },
      yAxis: {
        title: {
          text: ''
        },
        max: 2,
        min: 0
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: '',
        pointInterval: 24 * 3600 * 1000,
        pointStart: Date.UTC(2014, 0, 1),
        data: data,
        enableMouseTracking: false
        }]
    }
    
    return chart;
  }

  return {
    internet: internet,
    sms: sms,
    arama: arama
  }
}])