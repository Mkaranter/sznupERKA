import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimalService } from '/Users/michalkaranter/GitHub/sznupERKA/src/app/animal.service'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
    console.log(AnimalService.prototype.action)

  }

  nara() {
    this.navCtrl.pop()
  }

}
