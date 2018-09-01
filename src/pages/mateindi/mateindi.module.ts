import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateindiPage } from './mateindi';

@NgModule({
  declarations: [
    MateindiPage,
  ],
  imports: [
    IonicPageModule.forChild(MateindiPage),
  ],
})
export class MateindiPageModule {}
