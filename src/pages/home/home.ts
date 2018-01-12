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

  call() {
    this.AppService.action = "call"
    this.navCtrl.push(AnimalTypeChoicePage)
  }

  help() {
    this.AppService.action = "help"
    this.navCtrl.push(AnimalTypeChoicePage)
  }
}