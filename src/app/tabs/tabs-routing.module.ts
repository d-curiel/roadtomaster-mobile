import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
      {
        path: 'tab-champions',
        loadChildren: () => import('../tab-champions/tab-champions.module').then(m => m.TabChampionsPageModule)
      },
      {
        path: 'tab-items',
        loadChildren: () => import('../tab-items/tab-items.module').then(m => m.TabItemsPageModule)
      },
      {
        path: 'tab-game',
        loadChildren: () => import('../tab-game/tab-game.module').then(m => m.TabGamePageModule)
      },
      {
        path: 'tab-history',
        loadChildren: () => import('../tab-history/tab-history.module').then(m => m.TabHistoryPageModule)
      },
      {
        path: 'tab-profile',
        loadChildren: () => import('../tab-profile/tab-profile.module').then(m => m.TabProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-champions',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-champions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
