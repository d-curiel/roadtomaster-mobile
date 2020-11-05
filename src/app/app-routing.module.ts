import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-champions',
    loadChildren: () => import('./tab-champions/tab-champions.module').then( m => m.TabChampionsPageModule)
  },
  {
    path: 'tab-items',
    loadChildren: () => import('./tab-items/tab-items.module').then( m => m.TabItemsPageModule)
  },
  {
    path: 'tab-game',
    loadChildren: () => import('./tab-game/tab-game.module').then( m => m.TabGamePageModule)
  },
  {
    path: 'tab-history',
    loadChildren: () => import('./tab-history/tab-history.module').then( m => m.TabHistoryPageModule)
  },
  {
    path: 'tab-profile',
    loadChildren: () => import('./tab-profile/tab-profile.module').then( m => m.TabProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
