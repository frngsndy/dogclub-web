import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Report3Service } from './services/report3.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'app-report3',
  imports: [DatePipe, FormsModule, DecimalPipe],
  templateUrl: './report3.component.html',
  styleUrl: './report3.component.css'
})
export class Report3Component {
  private _report3Api = inject(Report3Service);

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

    const res: any = await this._report3Api.getReport3(param);
    if (res.data)
      this.items = res.data;
  }

  onChange(value: Event) {
    this.fetchData();
  }

  total() {
    return this.items.reduce((sum, item) => sum + item.total, 0)
  }
}
