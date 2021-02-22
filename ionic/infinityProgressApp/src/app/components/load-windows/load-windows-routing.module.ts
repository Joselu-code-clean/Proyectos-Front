import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadWindowsPage } from './load-windows.page';

const routes: Routes = [
  {
    path: '',
    component: LoadWindowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadWindowsPageRoutingModule {}
