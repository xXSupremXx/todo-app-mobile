import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemViewPage } from './add-item-view.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemViewPageRoutingModule {}
