import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultLayoutRoutingModule } from './result-layout-routing.module';
import { ResultLayoutComponent } from './result-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ResultLayoutComponent],
  imports: [
    CommonModule,
    ResultLayoutRoutingModule,
    SharedModule
  ]
})
export class ResultLayoutModule { }
