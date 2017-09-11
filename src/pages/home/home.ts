import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AnimalService } from '/Users/michalkaranter/GitHub/sznupERKA/src/app/animal.service'
import { AnimalTypeChoicePage } from '../animal-type-choice/animal-type-choice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }

call() {
  AnimalService.prototype.action = "call"
  this.navCtrl.push(AnimalTypeChoicePage)
}

help() {
  AnimalService.prototype.action = "help"
  this.navCtrl.push(AnimalTypeChoicePage)
}

}