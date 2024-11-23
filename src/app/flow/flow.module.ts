import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowRoutingModule } from './flow-routing.module';
import { FlowComponent } from './flow.component';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    FlowComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FlowRoutingModule,
    FontAwesomeModule
  ]
})
export class FlowModule { }
