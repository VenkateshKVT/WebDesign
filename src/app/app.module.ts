import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
// import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherServiceService } from './weather-service.service';
import { ProfileService } from './profile.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [WeatherServiceService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
