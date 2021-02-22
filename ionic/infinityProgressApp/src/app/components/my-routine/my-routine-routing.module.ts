import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRoutinePage } from './my-routine.page';

const routes: Routes = [
  {
    path: '',
    component: MyRoutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRoutinePageRoutingModule {}
