import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Report2Service } from './services/report2.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { saveAs } from 'file-saver';
import moment from 'moment';

@Component({
  selector: 'app-report2',
  imports: [DatePipe, FormsModule, DecimalPipe],
  templateUrl: './report2.component.html',
  styleUrl: './report2.component.css'
})
export class Report2Component {
  private _report2Api = inject(Report2Service);

  @ViewChild('excelTable') excelTable!: ElementRef;

  startDate = moment().format('YYYY-MM-DD');
  endDate = moment().format('YYYY-MM-DD');
  items: any[] = [];

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    const param = {
      startDate: this.startDate,
      endDate: this.endDate,
    };

    const res: any = await this._report2Api.getReport2(param);
    if (res.data)
      this.items = res.data;
  }

  onChange(value: Event) {
    this.fetchData();
  }

  totalCase() {
    const total = this.items.reduce((sum, item) => sum + item.numOfCustomer, 0);
    return total ?? 0;
  }

  maximumCase() {
    const maxItem = this.items.reduce((max, item) => {
      return item.numOfCustomer > max.numOfCustomer ? item : max;
    }, this.items[0]);
    return maxItem == null ? 0 : maxItem.numOfCustomer;
  }

  minimumCase() {
    const minItem = this.items.reduce((min, item) => {
      return item.numOfCustomer < min.numOfCustomer ? item : min;
    }, this.items[0]);
    return minItem == null ? 0 : minItem.numOfCustomer;
  }

}
