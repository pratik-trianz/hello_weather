import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule  } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";



import { AppComponent }  from './app.component';
import { homeComponent } from './components/home/home.component';
import { weathersComponent } from './components/weathers/weathers.component';
import { itemsComponent } from './components/weathers/items.component';

import {WeatherService} from './services/weather.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, Ng2CompleterModule ],
  declarations: [ AppComponent, homeComponent, weathersComponent, itemsComponent ],
  providers:    [WeatherService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
