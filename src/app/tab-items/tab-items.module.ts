import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabItemsPageRoutingModule } from './tab-items-routing.module';

import { TabItemsPage } from './tab-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabItemsPageRoutingModule
  ],
  declarations: [TabItemsPage]
})
export class TabItemsPageModule {}
