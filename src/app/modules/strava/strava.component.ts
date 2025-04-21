import { DatePipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  chart: any;
  xaxis: any;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: any;
  dataLabels: any;
  title: any;
  plotOptions: any;
  legend: any;
  fill: any;
  tooltip: any;
  colors: any;
};

@Component({
  selector: 'app-strava',
  imports: [FormsModule, NgClass, DecimalPipe, DatePipe, NgApexchartsModule],
  templateUrl: './strava.component.html',
  styleUrl: './strava.component.css'
})
export class StravaComponent {
  chartOptions1: Partial<ChartOptions>;
  chartOptions2: Partial<ChartOptions>;
  chartOptions3: Partial<ChartOptions>;
  chartOptions4: Partial<ChartOptions>;
  today = new Date();

  team: string[] = [];
  distancing: number[] = [];
  caloring: number[] = [];
  timing: number[] = [];
  counting: number[] = [];

  constructor() {
    this.team = ['พี่เทค', 'พี่เจม', 'พี่น้อง', 'โชค', 'พี่หนึ่ง', 'กาน', 'เจ', 'พี่ขวัญ', 'พี่อ๊อฟ', 'พี่แนน', 'ฟร้อง', 'กิล', 'หมิว', 'ไทเก้อ'];
    this.distancing = this.team.map(x => this.distance(x));
    this.caloring = this.team.map(x => this.calories(x));
    this.timing = this.team.map(x => this.time(x));
    this.counting = this.team.map(x => this.count(x));

    this.chartOptions1 = {
      series: [
        {
          name: 'ระยะทาง (Km)',
          data: this.distancing
        },
      ],
      chart: {
        type: 'bar',
        height: 300
      },
      xaxis: {
        categories: this.team
      },
      title: {
        text: 'สรุปข้อมูล Distancing (Km)'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top',
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#000']
        },
        formatter: (val: any) => val.toFixed(1),
      },
      yaxis: {
        labels: {
          formatter: (val: any) => val.toFixed(0) // แสดง 2 ตำแหน่งทศนิยม
        }
      },
      colors: ['#FF4560']
    };

    this.chartOptions2 = {
      series: [
        {
          name: 'แคลอรี่ (Cal)',
          data: this.caloring
        },
      ],
      chart: {
        type: 'bar',
        height: 300
      },
      xaxis: {
        categories: this.team
      },
      title: {
        text: 'สรุปข้อมูล Calories'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top',
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#000']
        },
        formatter: (val: any) => val.toFixed(1),
      },
      yaxis: {
        labels: {
          formatter: (val: any) => val.toFixed(0) // แสดง 2 ตำแหน่งทศนิยม
        }
      },
      colors: ['#00E396']
    };

    this.chartOptions3 = {
      series: [
        {
          name: 'จำนวนเวลา (Minute)',
          data: this.timing
        },
      ],
      chart: {
        type: 'bar',
        height: 300
      },
      xaxis: {
        categories: this.team
      },
      title: {
        text: 'สรุปข้อมูล Timing (Minute)'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top',
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#000']
        },
        formatter: (val: any) => val.toFixed(1),
      },
      yaxis: {
        labels: {
          formatter: (val: any) => val.toFixed(0) // แสดง 2 ตำแหน่งทศนิยม
        }
      },
      colors: ['#008FFB']
    };

    this.chartOptions4 = {
      series: [
        {
          name: 'จำนวนครั้ง',
          data: this.counting
        },
      ],
      chart: {
        type: 'bar',
        height: 300
      },
      xaxis: {
        categories: this.team
      },
      title: {
        text: 'สรุปข้อมูล Counting'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top',
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#000']
        },
        formatter: (val: any) => val.toFixed(1),
      },
      yaxis: {
        labels: {
          formatter: (val: any) => val.toFixed(0) // แสดง 2 ตำแหน่งทศนิยม
        }
      },
      colors: ['#FEB019']
    };
  }

  yellow: any[] = ["พี่เทค", "พี่เจม", "พี่น้อง", "โชค", "พี่หนึ่ง", "กาน", "เจ"];
  red: any[] = ["พี่ขวัญ", "พี่อ๊อฟ", "พี่แนน", "ฟร้อง", "กิล", "หมิว", "ไทเก้อ"];

  yScore1 = signal(13);
  rScore1 = signal(12);

  data: any[] = [
    // { team: 'red', name: 'กิล', distance: (km), calories: (cal), time: (min), date: '2025-04-01' },
    { date: '2025-04-01', team: 'r', name: 'กิล', distance: 4.29, calories: 324, time: 28.5 },
    { date: '2025-04-01', team: 'y', name: 'พี่เจม', distance: 0, calories: 460, time: 57.43 },
    { date: '2025-04-01', team: 'r', name: 'พี่ขวัญ', distance: 7.4, calories: 627, time: 64.36 },
    { date: '2025-04-01', team: 'y', name: 'พี่เทค', distance: 0, calories: 341, time: 89.02 },
    // Y1 R1
    { date: '2025-04-02', team: 'y', name: 'พี่น้อง', distance: 0.07, calories: 5, time: 1.3 },
    { date: '2025-04-02', team: 'y', name: 'เจ', distance: 0.02, calories: 3, time: 0.26 },
    { date: '2025-04-02', team: 'y', name: 'เจ', distance: 2, calories: 209, time: 21.27 },
    { date: '2025-04-02', team: 'y', name: 'กาน', distance: 1.13, calories: 97, time: 10.02 },
    { date: '2025-04-02', team: 'r', name: 'ฟร้อง', distance: 3.777, calories: 56.5, time: 38.22 },
    { date: '2025-04-02', team: 'r', name: 'ไทเก้อ', distance: 1.72, calories: 180, time: 29.43 },
    // Y2 R1
    { date: '2025-04-03', team: 'y', name: 'พี่น้อง', distance: 0.05, calories: 4, time: 1.1 },
    { date: '2025-04-03', team: 'y', name: 'พี่หนึ่ง', distance: 3.02, calories: 450, time: 40.27 },// ex
    { date: '2025-04-03', team: 'y', name: 'กาน', distance: 4.36, calories: 384, time: 44.54 },
    { date: '2025-04-03', team: 'r', name: 'พี่ขวัญ', distance: 10.13, calories: 896, time: 79.39 },
    { date: '2025-04-03', team: 'y', name: 'พี่เทค', distance: 10.8, calories: 709, time: 82.46 },
    { date: '2025-04-03', team: 'y', name: 'พี่น้อง', distance: 1.4, calories: 91, time: 21.47 },
    // Y3 R1
    { date: '2025-04-04', team: 'y', name: 'พี่เจม', distance: 2.32, calories: 200, time: 32.12 },
    { date: '2025-04-04', team: 'y', name: 'พี่เจม', distance: 3.5, calories: 275, time: 24.03 },
    { date: '2025-04-04', team: 'r', name: 'ไทเก้อ', distance: 5.13, calories: 536, time: 48.57 },
    { date: '2025-04-04', team: 'r', name: 'ฟร้อง', distance: 1, calories: 24, time: 33.25 },
    { date: '2025-04-04', team: 'y', name: 'กาน', distance: 3.54, calories: 325, time: 43.53 },
    { date: '2025-04-04', team: 'r', name: 'หมิว', distance: 0, calories: 100, time: 30 },// ex
    // Y3 R2
    { date: '2025-04-05', team: 'r', name: 'ฟร้อง', distance: 2.194, calories: 52.7, time: 36.53 },
    { date: '2025-04-05', team: 'r', name: 'หมิว', distance: 0, calories: 200, time: 60 },// ex
    // Y3 R3
    { date: '2025-04-06', team: 'r', name: 'หมิว', distance: 0, calories: 200, time: 60 },// ex
    { date: '2025-04-06', team: 'y', name: 'พี่น้อง', distance: 2.72, calories: 177, time: 32.57 },
    { date: '2025-04-06', team: 'y', name: 'พี่เทค', distance: 0, calories: 132, time: 33.37 },
    { date: '2025-04-06', team: 'r', name: 'กิล', distance: 4.54, calories: 336, time: 36.41 },
    { date: '2025-04-06', team: 'r', name: 'ฟร้อง', distance: 1.982, calories: 251, time: 31.39 },
    // Y3 R4
    { date: '2025-04-07', team: 'y', name: 'พี่น้อง', distance: 3.3, calories: 215, time: 42.33 },
    { date: '2025-04-07', team: 'r', name: 'ฟร้อง', distance: 0, calories: 246, time: 32.54 },
    // Y4 R5
    { date: '2025-04-08', team: 'r', name: 'กิล', distance: 1.93, calories: 143, time: 20.48 },
    { date: '2025-04-08', team: 'y', name: 'พี่น้อง', distance: 2.31, calories: 151, time: 33.28 },
    { date: '2025-04-08', team: 'r', name: 'ฟร้อง', distance: 0, calories: 204, time: 30.14 },
    { date: '2025-04-08', team: 'y', name: 'พี่เทค', distance: 5, calories: 376, time: 33.26 },
    // Y5 R6
    { date: '2025-04-09', team: 'r', name: 'กิล', distance: 4.49, calories: 339, time: 29.36 },
    // Y5 R7
    { date: '2025-04-10', team: 'y', name: 'พี่น้อง', distance: 3.1, calories: 202, time: 39.33 },
    { date: '2025-04-10', team: 'r', name: 'พี่ขวัญ', distance: 0, calories: 200, time: 120 },
    { date: '2025-04-10', team: 'r', name: 'กิล', distance: 0, calories: 200, time: 120 },
    { date: '2025-04-10', team: 'r', name: 'ฟร้อง', distance: 0, calories: 200, time: 120 },
    { date: '2025-04-10', team: 'r', name: 'หมิว', distance: 0, calories: 200, time: 120 },
    { date: '2025-04-10', team: 'r', name: 'ไทเก้อ', distance: 0, calories: 200, time: 120 },
    { date: '2025-04-10', team: 'y', name: 'กาน', distance: 0, calories: 100, time: 60 },
    { date: '2025-04-10', team: 'y', name: 'เจ', distance: 0, calories: 200, time: 120 },
    { date: '2025-04-10', team: 'y', name: 'โชค', distance: 0, calories: 200, time: 120 },
    { date: '2025-04-10', team: 'y', name: 'พี่น้อง', distance: 0, calories: 200, time: 120 },
    // Y5 R8
    { date: '2025-04-11', team: 'y', name: 'เจ', distance: 3.22, calories: 329, time: 42.52 },
    { date: '2025-04-11', team: 'r', name: 'ฟร้อง', distance: 0, calories: 231, time: 31.57 },
    // Y6 R9
    { date: '2025-04-12', team: 'y', name: 'พี่น้อง', distance: 2.77, calories: 181, time: 34.09 },
    // Y7 R9
    { date: '2025-04-14', team: 'y', name: 'พี่เทค', distance: 0, calories: 177, time: 44.15 },
    // Y8 R9
    { date: '2025-04-15', team: 'y', name: 'พี่น้อง', distance: 2.44, calories: 159, time: 31.11 },
    // Y9 R9
    { date: '2025-04-17', team: 'y', name: 'พี่น้อง', distance: 2.5, calories: 163, time: 31.21 },
    { date: '2025-04-17', team: 'y', name: 'พี่เทค', distance: 10.89, calories: 682, time: 83.28 },
    // Y10 R9
    { date: '2025-04-18', team: 'y', name: 'โชค', distance: 0, calories: 300, time: 120 },
    // Y11 R9
    { date: '2025-04-19', team: 'y', name: 'พี่น้อง', distance: 3.02, calories: 197, time: 39.14 },
    { date: '2025-04-19', team: 'r', name: 'พี่ขวัญ', distance: 5.42, calories: 461, time: 43.17 },
    { date: '2025-04-19', team: 'r', name: 'หมิว', distance: 0, calories: 100, time: 30 },// ex
    // Y11 R10
    { date: '2025-04-20', team: 'y', name: 'พี่น้อง', distance: 3.02, calories: 197, time: 36.39 },
    { date: '2025-04-20', team: 'r', name: 'ไทเก้อ', distance: 6.06, calories: 633, time: 56.47 },
    { date: '2025-04-20', team: 'y', name: 'พี่เทค', distance: 10.01, calories: 621, time: 74.01 },
    { date: '2025-04-20', team: 'y', name: 'พี่เทค', distance: 0, calories: 92, time: 16.29 },
    { date: '2025-04-20', team: 'r', name: 'พี่ขวัญ', distance: 5.07, calories: 461, time: 41.19 },
    { date: '2025-04-20', team: 'y', name: 'พี่เจม', distance: 0, calories: 214, time: 45.14 },
    { date: '2025-04-20', team: 'r', name: 'หมิว', distance: 0, calories: 100, time: 30 },// ex
    // Y12 R11
    { date: '2025-04-21', team: 'y', name: 'พี่เจม', distance: 2.34, calories: 194, time: 30.10 },
    { date: '2025-04-21', team: 'y', name: 'พี่น้อง', distance: 3.23, calories: 210, time: 43.39 },
    { date: '2025-04-21', team: 'y', name: 'พี่เจม', distance: 4.05, calories: 446, time: 30 },
    { date: '2025-04-21', team: 'r', name: 'ฟร้อง', distance: 0, calories: 442, time: 60.54 },
    { date: '2025-04-21', team: 'r', name: 'พี่ขวัญ', distance: 0, calories: 301, time: 48.27 },
    // Y13 R12
  ];

  teamRed() {
    return this.data.filter(x => x.team === 'r');
  }

  teamYellow() {
    return this.data.filter(x => x.team === 'y');
  }

  distance(name: string) {
    return this.data.filter(x => x.name === name).reduce((sum, item) => sum + item.distance, 0);
  }

  calories(name: string) {
    return this.data.filter(x => x.name === name).reduce((sum, item) => sum + item.calories, 0);
  }

  time(name: string) {
    return this.data.filter(x => x.name === name).reduce((sum, item) => sum + item.time, 0);
  }

  count(name: string) {
    return this.data.filter(x => x.name === name).length;
  }

  distanceSum(team: string) {
    return this.data.filter(x => x.team === team).reduce((sum, item) => sum + item.distance, 0);
  }

  caloriesSum(team: string) {
    return this.data.filter(x => x.team === team).reduce((sum, item) => sum + item.calories, 0);
  }

  timeSum(team: string) {
    return this.data.filter(x => x.team === team).reduce((sum, item) => sum + item.time, 0);
  }

  countSum(team: string) {
    return this.data.filter(x => x.team === team).length;
  }
}
