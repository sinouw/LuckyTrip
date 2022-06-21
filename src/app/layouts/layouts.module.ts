import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { SearchLayoutComponent } from './search-layout/search-layout.component';
import { ResultLayoutComponent } from './result-layout/result-layout.component';


@NgModule({
  declarations: [SearchLayoutComponent, ResultLayoutComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
