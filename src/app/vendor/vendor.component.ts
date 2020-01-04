import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
// import { Chart } from 'chart.js';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  activeId: any;

  
   highcharts = Highcharts;
   chartOptions = {   
      title: {
        text: 'USD to EUR exchange rate over time'
      },
      credits:{
        enabled:true
      },
    
      xAxis:{
         title: {
          text: 'Exchange rate'
        },
       gridLineWidth: 0,
       labels: {
           enabled: true
       },
      },
      yAxis: { 
         title: {
          text: 'currency rate'
        },
       gridLineWidth: 0, 
         labels: {
             enabled: true
         },

      },
      tooltip: {
         valueSuffix:" BTC"
      },
      plotOptions : {
         area: {
            fillColor: {
               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
               stops: [
                  // [0, Highcharts.getOptions().colors[0]],
                  // [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  [0, 'lightgreen'], // start
                  [1, '#ffffff'], // end
               ]
            },
             showInLegend: true,
            // marker: {
            //    radius: 1
            // },
            // lineWidth: 1,
            // states: {
            //    hover: {
            //       lineWidth: 0,
            //    }
            // },
            threshold: null
         }
      },
      series:[{
         showInLegend: false,
         title:false,
         type: 'area',
         pointInterval: 10,
         pointStart: 1,
          plotBackgroundColor: null,
         data: [
            0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232,
            0.8233, 0.8258, 0.8283, 0.8278, 0.8256, 0.8292, 0.8239, 0.8239,
            0.8245, 0.8265, 0.8261, 0.8269, 0.8273, 0.8244, 0.8244, 0.8172,
            0.8139, 0.8146, 0.8164, 0.82,   0.8269, 0.8269, 0.8269, 0.8258,
            0.8247, 0.8286, 0.8289, 0.8316, 0.832,  0.8333, 0.8352, 0.8357,
            0.8355, 0.8354, 0.8403, 0.8403, 0.8406, 0.8403, 0.8396, 0.8418,
            0.8409, 0.8384, 0.8386, 0.8372, 0.839,  0.84,   0.8389, 0.84, 0.8423,
            0.8423, 0.8435, 0.8422, 0.838,  0.8373, 0.8316, 0.8303, 0.8303,
            0.8302, 0.8369, 0.84,   0.8385, 0.84,   0.8401, 0.8402, 0.8381,
            0.8351, 0.8314, 0.8273, 0.8213, 0.8207, 0.8207, 0.8215, 0.8242,
            0.8273, 0.8301, 0.8346, 0.8312, 0.8312, 0.8312, 0.8306, 0.8327,
            0.8282, 0.824,  0.8255, 0.8256, 0.8273, 0.8209, 0.8151, 0.8149,
            0.8213, 0.8273, 0.8273, 0.8261, 0.8252, 0.824,  0.8262, 0.8258,
            0.8261, 0.826,  0.8199, 0.8153, 0.8097, 0.8101, 0.8119, 0.8107,
            0.8105, 0.8084, 0.8069, 0.8047, 0.8023, 0.7965, 0.7919, 0.7921,
            0.8273, 0.8301, 0.8346, 0.8312, 0.8312, 0.8312, 0.8306, 0.8327,
            0.8282, 0.824,  0.8255, 0.8256, 0.8273, 0.8209, 0.8151, 0.8149,
            0.8213, 0.8273, 0.8273, 0.8261, 0.8252, 0.824,  0.8262, 0.8258,
            0.8261, 0.826,  0.8199, 0.8153, 0.8097, 0.8101, 0.8119, 0.8107,
         ]
      }]


   };
   

   highcharts1 = Highcharts;
   chartOptions1 = {   
    
                title: {
        text: 'USD to CNY exchange rate over time'
      },
                credits:{
                  enabled:false
                },
            
      xAxis:{
         title: {
          text: 'Exchange rate'
        },
       gridLineWidth: 0,
       labels: {
           enabled: true
       },
      },
      yAxis: { 
         title: {
          text: 'currency rate'
        },
       gridLineWidth: 0, 
         labels: {
             enabled: true
         },

      },
      tooltip: {
         valueSuffix:" °C"
      },
      plotOptions : {
         area: {
            fillColor: {
               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
               stops: [
                  // [0, Highcharts.getOptions().colors[0]],
                  // [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  [0, '#7FB6EC'], // start
                  [1, '#ffffff'], // end
               ]
            },
             showInLegend: false,
            marker: {
               radius: 1
            },
            lineWidth: 1,
            states: {
               hover: {
                  lineWidth: 0
               }
            },
            threshold: null
         }
      },
      series:[{
         showInLegend: false,
         title:false,
         type: 'area',
         pointInterval: 10,
         pointStart: 1,
          plotBackgroundColor: null,
         data: [
            0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232,
            0.8233, 0.8258, 0.8283, 0.8278, 0.8256, 0.8292, 0.8239, 0.8239,
            0.8245, 0.8265, 0.8261, 0.8269, 0.8273, 0.8244, 0.8244, 0.8172,
            0.8139, 0.8146, 0.8164, 0.82,   0.8269, 0.8269, 0.8269, 0.8258,
            0.8247, 0.8286, 0.8289, 0.8316, 0.832,  0.8333, 0.8352, 0.8357,
            0.8355, 0.8354, 0.8403, 0.8403, 0.8406, 0.8403, 0.8396, 0.8418,
            0.8409, 0.8384, 0.8386, 0.8372, 0.839,  0.84,   0.8389, 0.84, 0.8423,
            0.8423, 0.8435, 0.8422, 0.838,  0.8373, 0.8316, 0.8303, 0.8303,
            0.8302, 0.8369, 0.84,   0.8385, 0.84,   0.8401, 0.8402, 0.8381,
            0.8351, 0.8314, 0.8273, 0.8213, 0.8207, 0.8207, 0.8215, 0.8242,
            0.8273, 0.8301, 0.8346, 0.8312, 0.8312, 0.8312, 0.8306, 0.8327,
            0.8213, 0.8273, 0.8273, 0.8261, 0.8252, 0.824,  0.8262, 0.8258,
            0.8261, 0.826,  0.8199, 0.8153, 0.8097, 0.8101, 0.8119, 0.8107,
         ]
      }]
   };


   highcharts2 = Highcharts;
   chartOptions2 = {   
    
                title: {
        text: 'USD to BTC exchange rate over time'
      },
                credits:{
                  enabled:false
                },
            
         xAxis:{
         title: {
          text: 'Exchange rate'
        },
       gridLineWidth: 0,
       labels: {
           enabled: true
       },
      },
      yAxis: { 
         title: {
          text: 'currency rate'
        },
       gridLineWidth: 0, 
         labels: {
             enabled: true
         },

      },
      tooltip: {
         valueSuffix:"CNY"
      },
      plotOptions : {
         area: {
            fillColor: {
               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
               stops: [
                  // [0, Highcharts.getOptions().colors[0]],
                  // [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  [0, '#cbaee8'], // start
                  [1, '#ffffff'], // end
               ]
            },
             showInLegend: false,
            marker: {
               radius: 1
            },
            lineWidth: 1,
            states: {
               hover: {
                  lineWidth: 0
               }
            },
            threshold: null
         }
      },
      series:[{
         showInLegend: false,
         title:false,
         type: 'area',
         pointInterval: 10,
         pointStart: 1,
          plotBackgroundColor: null,
         data: [
            0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232,
            0.8233, 0.8258, 0.8283, 0.8278, 0.8256, 0.8292, 0.8239, 0.8239,
            0.8245, 0.8265, 0.8261, 0.8269, 0.8273, 0.8244, 0.8244, 0.8172,
            0.8139, 0.8146, 0.8164, 0.82,   0.8269, 0.8269, 0.8269, 0.8258,
            0.8247, 0.8286, 0.8289, 0.8316, 0.832,  0.8333, 0.8352, 0.8357,
            0.8355, 0.8354, 0.8403, 0.8403, 0.8406, 0.8403, 0.8396, 0.8418,
            0.8409, 0.8384, 0.8386, 0.8372, 0.839,  0.84,   0.8389, 0.84, 0.8423,
            0.8423, 0.8435, 0.8422, 0.838,  0.8373, 0.8316, 0.8303, 0.8303,
            0.8302, 0.8369, 0.84,   0.8385, 0.84,   0.8401, 0.8402, 0.8381,
            0.8351, 0.8314, 0.8273, 0.8213, 0.8207, 0.8207, 0.8215, 0.8242,
            0.8273, 0.8301, 0.8346, 0.8312, 0.8312, 0.8312, 0.8306, 0.8327,
            0.8282, 0.824,  0.8255, 0.8256, 0.8273, 0.8209, 0.8151, 0.8149,
            0.8213, 0.8273, 0.8273, 0.8261, 0.8252, 0.824,  0.8262, 0.8258,
            0.8261, 0.826,  0.8199, 0.8153, 0.8097, 0.8101, 0.8119, 0.8107,
            0.8213, 0.8273, 0.8273, 0.8261, 0.8252, 0.824,  0.8262, 0.8258,
            0.8261, 0.826,  0.8199, 0.8153, 0.8097, 0.8101, 0.8119, 0.8107,
         ]
      }]
   };


  constructor(private httpService: HttpClient) {
  // this.list = [
  //      'BTC',
  //      'ERK',
  //      'CNY',
  //      'ITC',
  //      ]; 
   }

   arrBirds: string [];LineChart=[];

    ChangeActiveId(item , val) {
      this.activeId = item; 
      this.httpService.get('./assets/cny.json/' + val).subscribe(
        data => {
          this.arrBirds = data as string [];
          console.log(this.arrBirds);
          // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        },
          (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
  };

  // isActive(item) {
  //     return this.selected === item;
  // };

  ngOnInit () {
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrBirds);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
}

// isActive(item) {
//       return this.selected === item;
//   };

// select(item) {
//       this.selected = item; 
//   };
          
  

  BTC(item){
    this.activeId = item
      // this.selected = item;
      this.httpService.get('./assets/arrbirds.json').subscribe(
        data => {
          this.arrBirds = data as string [];
          console.log(this.arrBirds);
          // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        },
          (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }

    CNY(item){
      this.activeId = item
      // this.selected = item;
      this.httpService.get('./assets/cny.json').subscribe(
        data => {
          this.arrBirds = data as string [];
          console.log(this.arrBirds);
          // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        },
          (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }

    btc(item){
      this.activeId = item
      // this.selected = item;
      this.httpService.get('./assets/btc.json').subscribe(
        data => {
          this.arrBirds = data as string [];
          console.log(this.arrBirds);
          // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        },
          (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }


}

    