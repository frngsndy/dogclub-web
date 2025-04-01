import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Report3Service } from './services/report3.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
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

  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.excelTable.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'TableExport.xlsx');
  }
}
