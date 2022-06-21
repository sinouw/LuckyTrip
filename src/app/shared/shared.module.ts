import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { BannerComponent } from './banner/banner.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CardComponent, SearchInputComponent, BannerComponent, LogoComponent],
  imports: [CommonModule, RouterModule,FormsModule,HttpClientModule],
  exports: [CardComponent, SearchInputComponent, BannerComponent, LogoComponent]
})
export class SharedModule { }
