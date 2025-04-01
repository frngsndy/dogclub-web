import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'components',
    component: LayoutComponent,
    loadChildren: () => import('../uikit/uikit.module').then((m) => m.UikitModule),
  },
  {
    path: 'report',
    component: LayoutComponent,
    children: [
      { path: 'animal', loadComponent: () => import('../report1/report1.component').then((m) => m.Report1Component), },
      { path: 'customer', loadComponent: () => import('../report2/report2.component').then((m) => m.Report2Component), },
      { path: 'forecast', loadComponent: () => import('../report3/report3.component').then((m) => m.Report3Component), },
      { path: 'myself', loadComponent: () => import('../myself/myself.component').then((m) => m.MyselfComponent), }
    ]
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
