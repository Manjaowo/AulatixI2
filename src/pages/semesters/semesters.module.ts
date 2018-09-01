import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SemestersPage } from './semesters';

@NgModule({
  declarations: [
    SemestersPage,
  ],
  imports: [
    IonicPageModule.forChild(SemestersPage),
  ],
})
export class SemestersPageModule {}
