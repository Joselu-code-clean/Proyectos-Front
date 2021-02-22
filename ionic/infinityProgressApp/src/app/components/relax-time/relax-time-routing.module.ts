import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelaxTimePage } from './relax-time.page';

const routes: Routes = [
  {
    path: '',
    component: RelaxTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelaxTimePageRoutingModule {}
