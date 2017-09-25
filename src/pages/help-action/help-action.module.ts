import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpActionPage } from './help-action';

@NgModule({
  declarations: [
    HelpActionPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpActionPage),
  ],
})
export class HelpActionPageModule {}
