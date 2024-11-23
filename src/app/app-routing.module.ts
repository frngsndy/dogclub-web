import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowRoutingModule } from './flow/flow-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';

const routes: Routes = [
  { path: 'flow', loadChildren: () => import('./flow/flow.module').then(m => m.FlowModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    FlowRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
