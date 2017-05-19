import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Subject} from "rxjs/Subject";
import { CompleterService, CompleterData } from 'ng2-completer';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';

@Component({
  selector: 'home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css'],
  providers:    [WeatherService],
})
export class homeComponent implements OnInit {

weatherData:any;
weatherForeCastData: any[];
errorMessage:string;

public searchControl: FormControl;
@ViewChild("search")
 public searchElementRef: ElementRef;

protected searchStr: string;
  protected dataService: CompleterData;
  protected searchData = [
    { city: 'Hyderabad', value: '' },
    { city: 'Chennai', value: '' },
    { city: 'Mumbai', value: '' },
    { city: 'Banglore', value: '' },
    { city: 'Kolakata', value: '' },
    { city: 'Delhi', value: '' },
    { city: 'Nagpur', value: '' },
    { city: 'Newyork', value: ''}
  ];
//protected searchData :any[];
constructor(private _wService:WeatherService, private completerService: CompleterService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {

    this.dataService = completerService.local(this.searchData, 'city', 'city');
}

ngOnInit() {
//  this.weatherData = {};
//create search FormControl
   this.searchControl = new FormControl();

   //load Places Autocomplete
   this.mapsAPILoader.load().then(() => {
       let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
         types: ["address"]
       });
       autocomplete.addListener("place_changed", () => {
         this.ngZone.run(() => {
           //get the place result
           let place: google.maps.places.PlaceResult = autocomplete.getPlace();

           //verify result
           if (place.geometry === undefined || place.geometry === null) {
             return;
           }
           
         });
       });
     });
}
  onType(txt:string){
    // this._wService.getCities(txt)
    // .subscribe(data=> { this.searchData = data },
    //   error => this.errorMessage = <any>error)


  }
  onSubmit(city:string){

    this._wService.getWeather(city)
    .subscribe(data => {this.weatherData = data;console.log(data)},
               error =>  this.errorMessage = <any>error,
             );

    this._wService.getWeatherForecast(city)
    .subscribe(data => {this.weatherForeCastData = data;console.log(data)},
               error =>  this.errorMessage = <any>error,
             );

  }
}
