import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmtyPageRoutingModule } from './emty-routing.module';

import { EmtyPage } from './emty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmtyPageRoutingModule
  ],
  declarations: [EmtyPage]
})
export class EmtyPageModule {}
