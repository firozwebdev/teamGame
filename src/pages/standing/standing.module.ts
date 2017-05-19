import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Standing } from './standing';

@NgModule({
  declarations: [
    Standing,
  ],
  imports: [
    IonicPageModule.forChild(Standing),
  ],
  exports: [
    Standing
  ]
})
export class StandingModule {}
