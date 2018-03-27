import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurationCategoryPage } from './configuration-category';

@NgModule({
  declarations: [
    ConfigurationCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurationCategoryPage),
  ],
})
export class ConfigurationCategoryPageModule {}
