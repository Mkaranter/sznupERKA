import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  elo: boolean = true
  
  constructor(public navCtrl: NavController) {
    this.elo = false
  }

siema() {
  
  this.elo = !this.elo
  console.log(this.elo)
  //this.navCtrl.push(ContactPage)
}

}
