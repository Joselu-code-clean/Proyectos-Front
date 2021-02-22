import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadWindowsPageRoutingModule } from './load-windows-routing.module';

import { LoadWindowsPage } from './load-windows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadWindowsPageRoutingModule
  ],
  declarations: [LoadWindowsPage]
})
export class LoadWindowsPageModule {}
