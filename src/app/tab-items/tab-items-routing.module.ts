import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabItemsPage } from './tab-items.page';

const routes: Routes = [
  {
    path: '',
    component: TabItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabItemsPageRoutingModule {}
