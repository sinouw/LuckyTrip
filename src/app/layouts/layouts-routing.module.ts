import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Lazy loaded components
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'search', loadChildren: () => import('./search-layout/search-layout.module').then(m => m.SearchLayoutModule) },
  { path: 'result', loadChildren: () => import('./result-layout/result-layout.module').then(m => m.ResultLayoutModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
