import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishScreenPageRoutingModule } from './finish-screen-routing.module';

import { FinishScreenPage } from './finish-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishScreenPageRoutingModule
  ],
  declarations: [FinishScreenPage]
})
export class FinishScreenPageModule {}
