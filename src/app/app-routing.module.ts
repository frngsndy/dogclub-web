import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },

  { path: '', redirectTo: '', pathMatch: 'full' }, // เส้นทางเริ่มต้น
  { path: '**', redirectTo: '' }, // กรณีไม่พบเส้นทาง
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
