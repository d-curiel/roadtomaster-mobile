import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabChampionsPageRoutingModule } from './tab-champions-routing.module';

import { TabChampionsPage } from './tab-champions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabChampionsPageRoutingModule
  ],
  declarations: [TabChampionsPage]
})
export class TabChampionsPageModule {}
