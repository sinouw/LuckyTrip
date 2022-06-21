import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultLayoutRoutingModule } from './result-layout-routing.module';
import { ResultLayoutComponent } from './result-layout.component';


@NgModule({
  declarations: [ResultLayoutComponent],
  imports: [
    CommonModule,
    ResultLayoutRoutingModule
  ]
})
export class ResultLayoutModule { }
