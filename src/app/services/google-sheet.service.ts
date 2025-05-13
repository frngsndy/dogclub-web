import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {
  private apiKey = 'AIzaSyB33hJW3-45ZTdR72VOB278tps72RyT1DE' //'YOUR_API_KEY';
  private sheetId = '1-1yex0BXlwTvGVJ_ezkGISR499qEdHoZV63ErYaPkIE' //'YOUR_SHEET_ID';
  private range = 'Sheet1!A1:D4'; // ปรับตาม Range ที่ต้องการ

  constructor(private http: HttpClient) {}

  getSheetData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.range}?key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        const rows = response.values;
        const headers = rows[0];
        const data = rows.slice(1).map((row: string[]) => {
          const obj: any = {};
          headers.forEach((header: string, i: number) => {
            obj[header] = row[i] || '';
          });
          return obj;
        });
        return data;
      })
    );
  }
}
