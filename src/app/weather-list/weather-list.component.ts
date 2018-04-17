import { Component, OnInit } from '@angular/core';
import {WeatherItemComponent} from '../weather-item/weather-item.component';
import {WEATHER_ITEMS} from './weather.data';
import {WeatherItem} from '../weather-item/weather-item'
import {WeatherServiceService} from '../weather-service.service'


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherServiceService]
})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[];
  constructor(private _weatherService: WeatherServiceService) { }

  ngOnInit() {

  	this.weatherItems = this._weatherService.getWeatherItems();

  }

}
