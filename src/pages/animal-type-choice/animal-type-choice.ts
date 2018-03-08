import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelpActionPage } from '../help-action/help-action';
import { AppService } from '../../app/app.service';
import { AppState } from '../../app/app-state';
import { AnimalService } from '../../app/animal.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private AnimalService: AnimalService, private AppService: AppService) {
  }

  chooseAnimalType(animalType: string) {
    var appState = this.AppService.getAppState()
    this.AppService.setAnimalType(animalType)
    if (appState.userAction == "call") {
      console.log(this.AppService.getAppState())
    } else {
      this.navCtrl.push(HelpActionPage)
    }
  }
}
