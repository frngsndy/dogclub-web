import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxOrgChartComponent } from '@ahmedaoui/ngx-org-chart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOrgChartComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
