import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelpActionPage } from '../help-action/help-action';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the AnimalTypeChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-type-choice',
  templateUrl: 'animal-type-choice.html',
})
export class AnimalTypeChoicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AnimalService: AppService) {
    this.AnimalService.type = ""
  }

  chooseAnimalType(animalType: string) {
    this.AnimalService.type = animalType
    if (this.AnimalService.action == "call") {
      console.log(animalType + ' call')
    } else {
      this.navCtrl.push(HelpActionPage)
    }
  }
}
