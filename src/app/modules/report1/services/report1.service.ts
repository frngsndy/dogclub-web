import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class Report1Service {
  private api = inject(ApiService);

  public getMaster() {
    return this.api.get('/api/Report/master-data');
  }

  public getReport1(param: any) {
    return this.api.post('/api/Report/report1', param);
  }
}
