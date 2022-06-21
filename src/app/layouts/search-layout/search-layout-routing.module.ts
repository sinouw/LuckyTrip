import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLayoutComponent } from './search-layout.component';


const routes: Routes = [
  { path: '', component: SearchLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchLayoutRoutingModule { }
