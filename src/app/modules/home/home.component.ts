import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'TTP Animal Hospital';
  faPlus = faPlus;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    const res = await this.api.get('/User');
    console.log('res', res);
  }
}
