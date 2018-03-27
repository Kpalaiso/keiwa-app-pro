import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LanguePage } from '../pages/langue/langue';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { ConfigurationChargesPage } from '../pages/configuration-charges/configuration-charges';
import { ConfigurationOtherPage } from '../pages/configuration-other/configuration-other';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = LanguePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      

// set status bar to white
      statusBar.backgroundColorByHexString('#036e2b');
      splashScreen.hide();
    });
  }
}
