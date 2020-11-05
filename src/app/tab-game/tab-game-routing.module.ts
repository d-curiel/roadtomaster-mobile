import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabGamePage } from './tab-game.page';

const routes: Routes = [
  {
    path: '',
    component: TabGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabGamePageRoutingModule {}
