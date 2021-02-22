import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitCardPage } from './unit-card.page';

const routes: Routes = [
  {
    path: '',
    component: UnitCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitCardPageRoutingModule {}
