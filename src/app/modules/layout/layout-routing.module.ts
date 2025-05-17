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
      { path: 'animal', loadComponent: () => import('../report1/report1.component').then((m) => m.Report1Component) },
      { path: 'customer', loadComponent: () => import('../report2/report2.component').then((m) => m.Report2Component) },
      { path: 'forecast', loadComponent: () => import('../report3/report3.component').then((m) => m.Report3Component) },
      { path: 'strava', loadComponent: () => import('../strava/strava.component').then((m) => m.StravaComponent) },
    ]
  },
  {
    path: 'money',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('../myself/myself.component').then((m) => m.MyselfComponent) },
    ]
  },
  {
    path: 'demo',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('../demo/demo.component').then((m) => m.DemoComponent) },
    ]
  },
  {
    path: 'ag-grid',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('../ag-grid-example/ag-grid-example.component').then((m) => m.AgGridExampleComponent) },
    ]
  },
  {
    path: 'myfriends',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('../myfriends/myfriends.component').then((m) => m.MyfriendsComponent) },
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
