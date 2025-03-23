import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);
  private env = environment;

  constructor() { }

  private baseUrl() {
    return this.env.baseUrl;
  }

  public get(url: string) {
    return firstValueFrom(this.http.get(this.baseUrl() + url));
  }

  public post(url: string, param: any) {
    return firstValueFrom(this.http.post(this.baseUrl() + url, param));
  }

  /* API */
  public getMaster() {
    return this.get('/api/Report/master-data');
  }

  public getReport1(param: any) {
    return this.post('/api/Report/report1', param);
  }
}
