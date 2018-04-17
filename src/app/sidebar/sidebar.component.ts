import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {ProfileService} from '../profile.service';
import {WeatherServiceService} from '../weather-service.service';
import {WeatherItemComponent} from '../weather-item/weather-item.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  profiles: Profile[];
  constructor(private _profileService: ProfileService, private _weatherService: WeatherServiceService) { }

  ngOnInit() {
  	this.profiles = this._profileService.getProfiles();
  }

  onSaveNew(){
  	const cities = this._weatherService.getWeatherItems().map(function (element) {
  		return element.cityName;

  	});
  	this._profileService.saveNewProfile(cities);

  }

  onLoadProfile(profile: Profile){
  		this._weatherService.clearWeatherItems();
  		for(let i=0; i<profile.cities.length; i++){
  			this._weatherService.searchWeatherData(profile.cities[i])
  			.retry()
  			.subscribe(
  				data => {
  					const weatherItem = (data.name, data.weather[0].description, data.main.temp);
  					this._weatherService.addWeatherItem(weatherItem);
  				})
  		}
  }

  onDeleteProfile(event: Event, profile: Profile){
  	event.stopPropagation();
  	this._profileService.deleteProfile(profile);

  }

}


