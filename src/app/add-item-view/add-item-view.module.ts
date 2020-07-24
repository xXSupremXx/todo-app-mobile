import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from "@agm/core";
import { IonicModule } from '@ionic/angular';

import { AddItemViewPageRoutingModule } from './add-item-view-routing.module';

import { AddItemViewPage } from './add-item-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemViewPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCHHSQaxmg9qejIQCK7Xxt6Lz1-vNRgxP4'
    })
  ],
  declarations: [AddItemViewPage]
})
export class AddItemViewPageModule {}
