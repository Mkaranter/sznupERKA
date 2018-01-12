import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AnimalTypeChoicePage } from '../animal-type-choice/animal-type-choice';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private AppService: AppService) {
  }

  chooseAction(actionType: string) {
    this.AppService.action = actionType
    this.navCtrl.push(AnimalTypeChoicePage)
  }
}