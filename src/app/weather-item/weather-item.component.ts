import { Component, OnInit, Input } from '@angular/core';
import {WeatherItem} from './weather-item';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
  // inputs: ['weatherItem']
})
export class WeatherItemComponent implements OnInit {

  @Input('item') weatherItem: WeatherItem;
  constructor() {

  	this.weatherItem = new WeatherItem('London', 'CLOUDY', 32);

   }

  ngOnInit() {
  }

}
