import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineListPage } from './routine-list.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineListPageRoutingModule {}
