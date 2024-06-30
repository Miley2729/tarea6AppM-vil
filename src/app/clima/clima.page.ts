import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  city = 'Santo Domingo'; // Ciudad en RD
  country = 'DO'; // Código de país para República Dominicana
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeatherByCity(this.city, this.country)
      .subscribe(
        (data: any) => {
          this.weatherData = data;
        },
        (error) => {
          this.errorMessage = 'Error al obtener datos de clima.';
          console.error(error);
        }
      );
  }
}
