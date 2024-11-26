import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeModule } from '../home/home.module';
import { FlowModule } from '../flow/flow.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: () => HomeModule },
      { path: 'flow', loadChildren: () => FlowModule }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
