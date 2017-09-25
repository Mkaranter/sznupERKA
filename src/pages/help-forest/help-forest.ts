import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimalService } from '../../app/animal.service';
import { Animal } from '../../app/animal';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the HelpForestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help-forest',
  templateUrl: 'help-forest.html',
})
export class HelpForestPage implements OnInit{
  animals: Animal[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private AnimalService: AnimalService, private AppService: AppService) {
    console.log(this.AppService.type)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpForestPage');
  }

  getAnimals(): void {
    this.AnimalService.getAnimals().then(animals => this.animals = animals)
  }

  ngOnInit(): void {
    this.getAnimals()
  }
}
