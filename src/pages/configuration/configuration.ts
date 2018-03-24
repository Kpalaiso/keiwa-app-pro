import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * Generated class for the ConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
  animations:[

    trigger("produitservice", [
      state("visible-prod", style({
        transform: 'translateY(0%)'
      })),
      state("invisible-prod", style({
        transform: 'translateY(-200%)'
      })),
      transition('* => *', animate('1s ease-in'))
    ]), 

    trigger("charges", [
      state("visible-charge", style({
        transform: 'translateY(-100%)'
        
        
      })),
      state("invisible-charge", style({
        transform: 'translateY(-500%)'
      })),
      transition('* => *', animate('1s ease-out'))
    ]),
    trigger("autre-modifs", [
      state("visible-autre-modifs", style({
        transform: 'translateY(-200%)'
        
      })),
      state("invisible-autre-modifs", style({
        transform: 'translateY(-600%)'
      })),
      transition('* => *', animate('1s ease-in'))
    ])

  ]
})
export class ConfigurationPage {

  stateProd="visible-prod";
  stateCharge="invisible-charge";
  stateModif="invisible-autre-modifs";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationPage');
  }

  toggleVisibility(){
    this.stateProd=(this.stateProd=="visible-prod")?"invisible-prod":"visible-prod";
    this.stateCharge=(this.stateCharge=="visible-charge")?"invisible-charge":"visible-charge";
  }

  toggleVisibles(){
    this.stateCharge=(this.stateCharge=="visible-charge")?"invisible-charge":"visible-charge";
    this.stateModif=(this.stateModif=="visible-autre-modifs")?"invisible-autre-modifs":"visible-autre-modifs";
  }

}
