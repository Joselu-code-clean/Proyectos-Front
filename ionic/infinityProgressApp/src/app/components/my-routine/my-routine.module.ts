import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRoutinePageRoutingModule } from './my-routine-routing.module';

import { MyRoutinePage } from './my-routine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRoutinePageRoutingModule
  ],
  declarations: [MyRoutinePage]
})
export class MyRoutinePageModule {}
