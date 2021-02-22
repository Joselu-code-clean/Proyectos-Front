import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishScreenPage } from './finish-screen.page';

const routes: Routes = [
  {
    path: '',
    component: FinishScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishScreenPageRoutingModule {}
