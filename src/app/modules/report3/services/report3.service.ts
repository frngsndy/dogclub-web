import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class Report3Service {
  private api = inject(ApiService);

  public getReport3(param: any) {
    return this.api.post('/api/Report/report3', param);
  }
}
