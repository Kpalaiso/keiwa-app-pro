import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { ConfigurationChargesPage } from "../configuration-charges/configuration-charges";
/**
 * Generated class for the ConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html'
})
export class ConfigurationPage {

  @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController, public navParams: NavParams,private nativePageTransitions: NativePageTransitions) {
  }
  goToConfigurationChargesPage(){
     const animationsOptions = {
      animation: 'ios-transition',
      duration: 300
    }
    
    this.navCtrl.push(ConfigurationChargesPage, {}, animationsOptions);
  }

  goToBack(){
    const animationsOptions = {
        animation: 'ios-transition',
        duration: 300
    }

    this.navCtrl.pop(animationsOptions);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationPage');
  }

  goToBackSlide(numberslide){
    this.slides.slideTo(numberslide, 300);
  }

  goToSlide(numberslide){
    this.slides.slideTo(numberslide, 300);
  }

 

}
