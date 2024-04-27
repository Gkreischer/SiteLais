import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ServicesComponent } from '../home/components/services/services.component';
import { RegionsComponent } from './components/regions/regions.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, CardInfoComponent, FormContactComponent, ServicesComponent, RegionsComponent]
})
export class HomePageModule {}
