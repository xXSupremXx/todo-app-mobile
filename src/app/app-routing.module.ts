import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-item-view',
    loadChildren: () => import('./add-item-view/add-item-view.module').then( m => m.AddItemViewPageModule)
  },
  {
    path: 'edit-item-view/:id',
    loadChildren: () => import('./edit-item-view/edit-item-view.module').then( m => m.EditItemViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
