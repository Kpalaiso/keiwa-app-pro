import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { TabsPage } from "../tabs/tabs";
/**
 * Generated class for the ConfigurationOtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuration-other',
  templateUrl: 'configuration-other.html',
})
export class ConfigurationOtherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationOtherPage');
  }

  goToBack(){
    const animationsOptions = {
        animation: 'ios-transition',
        duration: 300
    }
    this.navCtrl.pop(animationsOptions);
      
  }
  goToTabsPage(){
    
    
    this.navCtrl.push(TabsPage);
  }

}
