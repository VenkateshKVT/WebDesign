import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {WeatherServiceService} from '../weather-service.service';
import {WeatherItem} from '../weather-item/weather-item';
import {NgForm} from "@angular/forms";
import { Subject } from 'rxjs/Subject';
// import {ControlGroup} from "@angular/common";

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  providers:[WeatherServiceService]
})
export class WeatherSearchComponent implements OnInit {

  data: any = {};
  private searchStream = new Subject<string>();	
  constructor(private _weatherService: WeatherServiceService) { }

  ngOnInit() {
  	this.searchStream
  	.debounceTime(300)
  	.distinctUntilChanged()
  	.switchMap((input: string) => this._weatherService.searchWeatherData(input))
  	.subscribe(data => this.data = data);
  }

  onSubmit(f: FormGroup){
  		this._weatherService.searchWeatherData(f.value.location)
  		.subscribe(data => {
  			const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
  			this._weatherService.addWeatherItem(weatherItem);
  		});
  		
  }

  onSearchLocation(cityName: string){
  	this.searchStream.next(cityName);

  }

}
