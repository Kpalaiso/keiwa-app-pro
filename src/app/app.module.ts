import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about'; 
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { OpportunitePage } from '../pages/opportunite/opportunite'; 
import { RecettePage } from '../pages/recette/recette';
import { DepensePage } from '../pages/depense/depense';
import { ConfigurationPage } from '../pages/configuration/configuration'; 
import { ConfigurationCategoryPage } from '../pages/configuration-category/configuration-category'; 
import { CreditPage } from '../pages/credit/credit';
import { TabsPage } from '../pages/tabs/tabs'; 
/**Page add by Terrence kondou */
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register'
import { ConfigurationChargesPage } from '../pages/configuration-charges/configuration-charges';
import { ConfigurationOtherPage } from '../pages/configuration-other/configuration-other';
import { LanguePage } from '../pages/langue/langue';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SaverecetteProvider } from '../providers/saverecette/saverecette';

@NgModule({
  declarations: [
    MyApp,
    LanguePage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ConfigurationChargesPage,
    ConfigurationOtherPage,
    ConfigurationCategoryPage,
    AboutPage,
    ContactPage,
    HomePage,
    OpportunitePage,
    RecettePage,
    DepensePage,
    CreditPage,
    WelcomePage,
    ConfigurationPage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LanguePage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ConfigurationChargesPage,
    ConfigurationOtherPage,
    ConfigurationCategoryPage,
    AboutPage,
    ContactPage,
    HomePage,
    OpportunitePage,
    RecettePage,
    DepensePage,
    CreditPage,
    WelcomePage,
    ConfigurationPage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    ReactiveFormsModule,
    TextToSpeech,
    SplashScreen,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SaverecetteProvider
  ]
})
export class AppModule {}
