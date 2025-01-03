import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private getBaseUrl() {
    return environment.apiUrl;
  }

  private getToken() {
    return localStorage.getItem(environment.token_key);
  }

  private getHeader() {
    return { headers: { Authorization: 'Bearer ' + this.getToken() } };
  }

  get(url: string) {
    return firstValueFrom(this.http.get(this.getBaseUrl() + url, this.getHeader()));
  }
}
