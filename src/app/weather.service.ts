import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {

    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?id=1526273&appid=ee269eb022751ed6b07a30c51a604e8c")
      .map(result => result);
  }

}
