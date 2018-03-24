import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@IonicPage()

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  goToLoginPage(){
     const animationsOptions = {
      animation: 'ios-transition',
      duration: 300
    }
    
    this.navCtrl.push(LoginPage, {}, animationsOptions);
  }
  goToRegisterPage(){
    const animationsOptions = {
      animation: 'ios-transition',
      duration: 300
    }
    
    this.navCtrl.push(RegisterPage, {}, animationsOptions);
  }

}
