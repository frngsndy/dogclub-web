import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Report2Service } from './services/report2.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-report2',
  imports: [DatePipe, FormsModule, DecimalPipe],
  templateUrl: './report2.component.html',
  styleUrl: './report2.component.css'
})
export class Report2Component {
  private _report2Api = inject(Report2Service);

  @ViewChild('excelTable') excelTable!: ElementRef;

  startDate = '2025-02-01';
  endDate = '2025-02-28';
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

  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.excelTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'TableExport.xlsx');
  }
}
