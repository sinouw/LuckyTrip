import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [CardComponent, SearchInputComponent, BannerComponent],
  imports: [CommonModule],
  exports: [CardComponent, SearchInputComponent,BannerComponent]
})
export class SharedModule { }
