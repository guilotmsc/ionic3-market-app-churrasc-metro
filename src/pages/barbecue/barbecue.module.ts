import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarbecuePage } from './barbecue';

@NgModule({
  declarations: [
    BarbecuePage,
  ],
  imports: [
    IonicPageModule.forChild(BarbecuePage),
  ],
})
export class BarbecuePageModule {}
