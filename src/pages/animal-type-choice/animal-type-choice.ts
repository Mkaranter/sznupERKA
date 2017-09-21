import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '/Users/michalkaranter/GitHub/sznupERKA/src/app/app.service'
import { HelpForestPage } from '../help-forest/help-forest';

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
  }

  forest() {
      if (this.AnimalService.action == "call") {
        console.log("forest call")
      }  else {
        this.navCtrl.push(HelpForestPage)
      }

  }

  home() {
     if (this.AnimalService.action == "call") {
      console.log("home call")
    }  else {
      console.log("home help")
    }

  }

}
