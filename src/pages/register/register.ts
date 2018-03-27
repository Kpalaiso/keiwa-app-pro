import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { ConfigurationCategoryPage } from "../configuration-category/configuration-category";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  language: string = "";
  Monnaie: string ="";
  activity: string="";




  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams,private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  goToSlide(numberslide){
    this.slides.slideTo(numberslide, 300);
  }

  

  goToBack(){
    const animationsOptions = {
        animation: 'ios-transition',
        duration: 300
    }
    this.navCtrl.pop(animationsOptions);
      
  }

 
  goPageConfiguration(){
    this.navCtrl.push(ConfigurationCategoryPage);
  }




}
