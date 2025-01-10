import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../core/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faPlus = faPlus;

  form: FormGroup;
  items: any = [];

  constructor(
    private _api: ApiService,
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      vetId: [null],
      type: [null],
      month: [null],
    });
  }

  ngOnInit() {
    // this.getUser();

    this.getCostSummary();
  }

  async getUser() {
    const res = await this._api.get('/User');
    console.log('res', res);
  }

  async getCostSummary() {
    const param = this.form.getRawValue();
    const res: any = await this._api.post('/Report/get-cost-summary', param);
    console.log('res', res);
    if (res) {
      this.items = res.data;
    }
  }

  async onSearch() {
    this.getCostSummary();
  }

  async onClear() {
    this.form.reset();
  }
}
