import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultLayoutComponent } from './result-layout.component';


const routes: Routes = [
  { path: ':id', component: ResultLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultLayoutRoutingModule { }
