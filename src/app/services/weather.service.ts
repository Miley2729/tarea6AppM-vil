import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '30e5e4bfb4da6346c9cbaf12854ff7b7'; // Acá la reemplazo por my key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string, country: string): Observable<any> {
    const params = new HttpParams()
      .set('q', `${city},${country}`)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http.get<any>(this.apiUrl, { params });
  }
}
