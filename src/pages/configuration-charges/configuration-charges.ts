import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { ConfigurationOtherPage } from "../configuration-other/configuration-other";
/**
 * Generated class for the ConfigurationChargesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuration-charges',
  templateUrl: 'configuration-charges.html',
})
export class ConfigurationChargesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationChargesPage');
  }
  goToBack(){
    const animationsOptions = {
        animation: 'ios-transition',
        duration: 300
    }
    this.navCtrl.pop(animationsOptions);
      
  }
  goToConfigurationOtherPage(){
     const animationsOptions = {
      animation: 'ios-transition',
      duration: 300
    }
    
    this.navCtrl.push(ConfigurationOtherPage, {}, animationsOptions);
  }

}
