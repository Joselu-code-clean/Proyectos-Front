import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitCardPageRoutingModule } from './unit-card-routing.module';

import { UnitCardPage } from './unit-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitCardPageRoutingModule
  ],
  declarations: [UnitCardPage]
})
export class UnitCardPageModule {}
