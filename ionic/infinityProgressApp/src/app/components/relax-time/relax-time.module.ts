import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelaxTimePageRoutingModule } from './relax-time-routing.module';

import { RelaxTimePage } from './relax-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelaxTimePageRoutingModule
  ],
  declarations: [RelaxTimePage]
})
export class RelaxTimePageModule {}
