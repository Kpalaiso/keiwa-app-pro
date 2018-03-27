import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ConfigurationPage } from "../configuration/configuration";

/**
 * Generated class for the ConfigurationCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuration-category',
  templateUrl: 'configuration-category.html',
})
export class ConfigurationCategoryPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationCategoryPage');
  }

  goToConfigurationPage(){
    const animationsOptions = {
     animation: 'ios-transition',
     duration: 300
   }

   this.navCtrl.push(ConfigurationPage, {}, animationsOptions);

}


}