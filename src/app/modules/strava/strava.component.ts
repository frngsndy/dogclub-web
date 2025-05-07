import { style } from '@angular/animations';
import { data } from './data';
import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  chart: any;
  xaxis: any;
  yaxis: any;
  title: any;
  labels: any;
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: any;
  tooltip: any;
};

@Component({
  selector: 'app-strava',
  imports: [FormsModule, DatePipe, NgApexchartsModule],
  templateUrl: './strava.component.html',
  styleUrl: './strava.component.css'
})
export class StravaComponent {
  chartOptions: Partial<ChartOptions>;
  today = new Date();

  team: string[] = [];
  distances: number[] = [];
  calories: number[] = [];
  times: number[] = [];
  days: number[] = [];

  constructor() {
    this.team = ['พี่เทค', 'พี่เจม', 'พี่น้อง', 'โชค', 'พี่หนึ่ง', 'กาน', 'เจ', 'พี่ขวัญ', 'พี่อ๊อฟ', 'พี่แนน', 'ฟร้อง', 'กิล', 'หมิว', 'ไทเก้อ'];
    this.times = this.team.map(x => this.time(x));
    this.calories = this.team.map(x => this.calorie(x));
    this.distances = this.team.map(x => this.distance(x));
    this.days = this.team.map(x => this.day(x));

    this.chartOptions = {
      series: [
        {
          name: "Times (Hrs)",
          type: "column",
          data: this.times
        },
        {
          name: "Distances (Km)",
          type: "column",
          data: this.distances
        },
        {
          name: "Calories",
          type: "area",
          data: this.calories
        },
        {
          name: "Days",
          type: "line",
          data: this.days
        }
      ],
      chart: {
        height: 650,
        type: "line"
      },
      dataLabels: {
        enabled: true,
        // enabledOnSeries: [0, 1, 3],
        formatter: function (val: any) {
          if (val > 1000)
            return (val / 1000).toFixed(2) + "K";
          else
            return val.toFixed(0);
        }
      },
      labels: this.team,
      xaxis: {
        // type: "datetime"
      },
      yaxis: [
        {
          // opposite: true,
          show: false,
          title: {
            text: "Times (Hrs)",
          },
          labels: {
            formatter: function (val: any) {
              return val.toFixed(0);
            }
          }
        },
        {
          // opposite: true,
          show: false,
          title: {
            text: "Distances (Km)"
          },
          labels: {
            formatter: function (val: any) {
              return val.toFixed(0);
            }
          }
        },
        {
          // opposite: true,
          show: false,
          title: {
            text: "Calories (KCal)"
          },
          labels: {
            formatter: function (val: any) {
              return val.toFixed(0);
            }
          }
        },
        {
          // opposite: true,
          show: false,
          title: {
            text: "Days"
          },
          labels: {
            formatter: function (val: any) {
              return val.toFixed(0);
            }
          }
        }
      ]
    };
  }

  // formatter: function (val: any) {
  //   return val.toFixed(0);
  // }

  yellow: any[] = ["พี่เทค", "พี่เจม", "พี่น้อง", "โชค", "พี่หนึ่ง", "กาน", "เจ"];
  red: any[] = ["พี่ขวัญ", "พี่อ๊อฟ", "พี่แนน", "ฟร้อง", "กิล", "หมิว", "ไทเก้อ"];

  yScore1 = signal(17);
  rScore1 = signal(16);
  data: any[] = data;

  teamRed() {
    return this.data.filter(x => x.team === 'r');
  }

  teamYellow() {
    return this.data.filter(x => x.team === 'y');
  }

  distance(name: string) {
    return this.data.filter(x => x.name === name).reduce((sum, item) => sum + item.distance, 0);
  }

  calorie(name: string) {
    const result = this.data.filter(x => x.name === name).reduce((sum, item) => sum + item.calories, 0);
    return result;
  }

  time(name: string) {
    const result = this.data.filter(x => x.name === name).reduce((sum, item) => sum + item.time, 0);
    return result / 60;
  }

  day(name: string) {
    const uniqueDates = new Set(
      this.data
        .filter(x => x.name === name)
        .map(x => x.date) // ดึงเฉพาะ date ที่ตรงกับ name
    );
    return uniqueDates.size;
  }
}
