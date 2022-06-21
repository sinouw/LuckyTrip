import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [CardComponent, SearchInputComponent],
  imports: [CommonModule],
  exports: [CardComponent, SearchInputComponent]
})
export class SharedModule { }
