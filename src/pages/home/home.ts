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
  
  constructor(public navCtrl: NavController, private AnimalService: AnimalService) {
  }

call() {
  //AnimalService.prototype.action = "call"
  this.AnimalService.action = "call" //TO JEST MORDO!!
  console.log(this.AnimalService.action)
  this.navCtrl.push(AnimalTypeChoicePage)
}

help() {
  this.AnimalService.action = "help"
  this.navCtrl.push(AnimalTypeChoicePage)
}

}