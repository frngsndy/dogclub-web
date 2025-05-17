import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { ApiService } from '../api/api.service';

// Register all community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-ag-grid-example',
  standalone: true,
  imports: [AgGridModule, ReactiveFormsModule],
  templateUrl: './ag-grid-example.component.html',
  styleUrls: ['./ag-grid-example.component.css'],
})
export class AgGridExampleComponent {
  rowData: any = [
    {
      name: 'John Doe',
      age: 30,
      country: 'USA',
      email: 'john@example.com',
      salary: 75000,
      department: 'Engineering',
      status: 'Active',
      joinDate: '2022-01-15'
    },
    {
      name: 'Mary Smith',
      age: 28,
      country: 'UK',
      email: 'mary@example.com',
      salary: 65000,
      department: 'Marketing',
      status: 'Active',
      joinDate: '2022-03-20'
    },
    {
      name: 'Bob Wilson',
      age: 32,
      country: 'Canada',
      email: 'bob@example.com',
      salary: 80000,
      department: 'Sales',
      status: 'Inactive',
      joinDate: '2021-11-10'
    }
  ];
  gridApi!: GridApi;
  columnDefs: ColDef[] = [
    {
      field: 'name',
      sortable: true,
      filter: true,
      headerName: 'Full Name'
    },
    {
      field: 'age',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'country',
      sortable: true,
      filter: true
    },
    {
      field: 'email',
      sortable: true,
      filter: true
    },
    {
      field: 'salary',
      sortable: true,
      filter: 'agNumberColumnFilter',
      valueFormatter: (params: any) => `$${params.value.toLocaleString()}`
    },
    {
      field: 'department',
      sortable: true,
      filter: true
    },
    {
      field: 'status',
      sortable: true,
      filter: true,
      cellRenderer: (params: any) => {
        return `<span class="badge ${params.value === 'Active' ? 'bg-success' : 'bg-danger'}">${params.value}</span>`;
      }
    },
    {
      field: 'joinDate',
      sortable: true,
      filter: 'agDateColumnFilter',
      valueFormatter: (params: any) => new Date(params.value).toLocaleDateString()
    }
  ];

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    // this.api.get('').subscribe({
    //   next: (res: any) => {
    //     this.rowData = res;
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   }
    // });
  }

  onGridReady(evt: any) {
    this.gridApi = evt.GridApi;
  }

  submitForm() {
    // this.api.saveData({ ...this.studentsForm.value, " name": this.nameControl.value }).subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   }
    // });
  }
}
