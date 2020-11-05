import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabGamePageRoutingModule } from './tab-game-routing.module';

import { TabGamePage } from './tab-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabGamePageRoutingModule
  ],
  declarations: [TabGamePage]
})
export class TabGamePageModule {}
