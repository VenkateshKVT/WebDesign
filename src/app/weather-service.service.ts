import { Injectable } from '@angular/core';
import {WEATHER_ITEMS} from './weather-list/weather.data';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {WeatherItem} from './weather-item/weather-item';
import 'rxjs/Rx';

@Injectable()
export class WeatherServiceService {

  constructor(private _http: HttpClient) { }

  getWeatherItems(){
  	return WEATHER_ITEMS;
  }

  searchWeatherData(cityName: string): Observable<any>{

  	 	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName 
  		+'&APPID=a04367c09fbc7a65d03c3fae1ecb66df&units=metric')
  		.map(response => console.log(response))
  		.catch(error => {
  			console.error(error);
  			return Observable.throw(error.json())
  		});
  }

  addWeatherItem(weatherItem: WeatherItem){
  		WEATHER_ITEMS.push(weatherItem);
  }

  clearWeatherItems(){
  	WEATHER_ITEMS.splice(0);
  }
}
