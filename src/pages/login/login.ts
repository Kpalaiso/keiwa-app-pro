import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { RegisterPage } from '../register/register';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToWelcomePage(){
    const animationsOptions = {
        animation: 'ios-transition',
        duration: 300
    }
    this.navCtrl.pop(animationsOptions);
      
  }
  goToRegisterPage(){
     const animationsOptions = {
      animation: 'ios-transition',
      duration: 300
    }
    
    this.navCtrl.push(RegisterPage, {}, animationsOptions);
    
  }

}
