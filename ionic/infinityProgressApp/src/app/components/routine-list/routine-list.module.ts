import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutineListPageRoutingModule } from './routine-list-routing.module';

import { RoutineListPage } from './routine-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutineListPageRoutingModule
  ],
  declarations: [RoutineListPage]
})
export class RoutineListPageModule {}
