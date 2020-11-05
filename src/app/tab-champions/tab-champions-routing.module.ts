import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabChampionsPage } from './tab-champions.page';

const routes: Routes = [
  {
    path: '',
    component: TabChampionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabChampionsPageRoutingModule {}
