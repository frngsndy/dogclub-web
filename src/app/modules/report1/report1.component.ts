import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Report1Service } from './services/report1.service';

@Component({
  selector: 'app-report1',
  imports: [FormsModule],
  templateUrl: './report1.component.html',
  styleUrl: './report1.component.css'
})
export class Report1Component {
  private _report1Api = inject(Report1Service);

  ddMonth: any[] = [
    { id: 1, name: 'Jan' },
    { id: 2, name: 'Feb' },
    { id: 3, name: 'Mar' },
    { id: 4, name: 'Apr' },
    { id: 5, name: 'May' },
    { id: 6, name: 'June' },
    { id: 7, name: 'Jul' },
    { id: 8, name: 'Aug' },
    { id: 9, name: 'Sep' },
    { id: 10, name: 'Oct' },
    { id: 11, name: 'Nov' },
    { id: 12, name: 'Dec' },
  ];
  ddVetName: any[] = [];
  ddPetType: any[] = [];

  month = 0;
  vetName = '';
  petType = '';
  items: any[] = [];

  ngOnInit() {
    this.fetchMaster();
    this.fetchData();
  }

  async fetchMaster() {
    const res: any = await this._report1Api.getMaster();
    if (res.data) {
      this.ddVetName = res.data.vetName;
      this.ddPetType = res.data.petType;
      
    }
  }

  async fetchData() {
    const param = {
      month: this.month,
      vetName: this.vetName,
      petType: this.petType,
    };

    const res: any = await this._report1Api.getReport1(param);
    if (res.data)
      this.items = res.data;
  }

  onChange(value: Event) {
    this.fetchData();
  }
}
