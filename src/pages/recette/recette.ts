import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SaverecetteProvider } from '../../providers/saverecette/saverecette';
import { FormGroup, FormControl } from '@angular/forms';
import { Slides } from 'ionic-angular';


/**
 * Generated class for the RecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recette',
  templateUrl: 'recette.html',
})
export class RecettePage {

  recetteForm=new FormGroup({
    daterecette: new FormControl(),
    category: new FormControl(), 
  libelerecette: new FormControl(),
  montantrecette: new FormControl()
  });

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public saverecet: SaverecetteProvider, public view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettePage');
  }

  closeRecette(){
    this.view.dismiss();
  }

  goToSlide3() {
    this.slides.slideTo(1, 500);
  }

  register(){
    alert(this.recetteForm.value)
   this.saverecet.dataRecette.push(this.recetteForm.value);
    
  }

  toggleFuction(e){
    e.target.classList.add("rec_ele");
  
    
    let var_mod=document.getElementsByClassName("lulu");
    for(let i=0; i<var_mod.length; i++)
    {
      if(var_mod[i]!=e.target)
      {
        console.log(var_mod[i]);
        var_mod[i].classList.add("select_ele");
        var_mod[i].classList.remove("rec_ele");
      }
      else
      {
        var_mod[i].classList.remove("select_ele");
        var_mod[i].classList.add("rec_ele");

      }
    }
  
  }

}
