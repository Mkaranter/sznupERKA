import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalTypeChoicePage } from './animal-type-choice';

@NgModule({
  declarations: [
    AnimalTypeChoicePage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalTypeChoicePage),
  ],
})
export class AnimalTypeChoicePageModule {}
