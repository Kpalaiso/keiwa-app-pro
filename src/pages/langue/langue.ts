import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
/**
 * Generated class for the LanguePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-langue',
  templateUrl: 'langue.html',
})
export class LanguePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguePage');
  }
  goToWelcomePage(){
     this.navCtrl.push(WelcomePage);
  }
}
