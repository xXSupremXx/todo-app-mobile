import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditItemViewPage } from './edit-item-view.page';

const routes: Routes = [
  {
    path: '',
    component: EditItemViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditItemViewPageRoutingModule {}
