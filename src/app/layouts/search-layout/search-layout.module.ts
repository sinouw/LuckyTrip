import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLayoutRoutingModule } from './search-layout-routing.module';
import { SearchLayoutComponent } from './search-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SearchLayoutComponent],
  imports: [
    CommonModule,
    SearchLayoutRoutingModule,
    SharedModule
  ]
})
export class SearchLayoutModule { }
