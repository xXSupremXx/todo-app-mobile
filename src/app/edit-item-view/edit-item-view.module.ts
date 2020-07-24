import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from "@agm/core";

import { IonicModule } from '@ionic/angular';

import { EditItemViewPageRoutingModule } from './edit-item-view-routing.module';

import { EditItemViewPage } from './edit-item-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditItemViewPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCHHSQaxmg9qejIQCK7Xxt6Lz1-vNRgxP4'
    })
  ],
  declarations: [EditItemViewPage]
})
export class EditItemViewPageModule {}
