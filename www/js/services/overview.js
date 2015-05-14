angular.module('service.overview', [])

.factory('overview', [function () {
  function data(userUsage) {
    return {
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: $(window).width() > 500 ? 600 : 350,
        marginTop: $(window).width() > 500 ? -100 : -200,
      },
      colors: ['#f3742a', '#387ef5', '#8bbc21'],
      title: {

        text: '%' + parseInt(userUsage.dataUsage) + '<br>Internet',
        align: 'center',

        verticalAlign: 'middle',
        y: $(window).width() > 500 ? -20 : -10,
        style: {
          "fontSize": $(window).width() > 500 ? "22px" : "16px"
        }
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
              textShadow: '0px 1px 2px black',
              fontSize: $(window).width() > 500 ? '16px' : '11px'
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
            ],
        point:{
          events:{
            mouseOver: function (event) {

             var chart=$('#container').highcharts();
              if(this.x===0){
                chart.setTitle({ text:'%'+this.y+"<br> Internet"});
              }
              else if(this.x===1){
                chart.setTitle({ text:'%'+this.y+"<br> SMS"});
              }
              else{
                chart.setTitle({ text:'%'+this.y+"<br> Voice"});
              }

            }
          }
        }
      }]
    }
  }

  return {
    data: data
  }
}])