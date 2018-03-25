import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurationChargesPage } from './configuration-charges';

@NgModule({
  declarations: [
    ConfigurationChargesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurationChargesPage),
  ],
})
export class ConfigurationChargesPageModule {}
