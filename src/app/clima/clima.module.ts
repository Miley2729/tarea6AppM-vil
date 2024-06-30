import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClimaPageRoutingModule } from './clima-routing.module';
import { ClimaPage } from './clima.page';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../services/weather.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ClimaPage],
  providers: [WeatherService] 
})
export class ClimaPageModule {}
