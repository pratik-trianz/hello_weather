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
  protected searchData:any =[];
  //   { description: 'Hyderabad', value: '' },
  //   { description: 'Chennai', value: '' },
  //   { description: 'Mumbai', value: '' },
  //   { description: 'Banglore', value: '' },
  //   { description: 'Kolakata', value: '' },
  //   { description: 'Delhi', value: '' },
  //   { description: 'Nagpur', value: '' },
  //   { description: 'Newyork', value: ''}
  // ];
//protected searchData :any[];
constructor(private _wService:WeatherService, private completerService: CompleterService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,private elRef: ElementRef) {

    // this.dataService = completerService.local(this.searchData, 'description', 'description');
}

ngOnInit() {
//  this.weatherData = {};
//create search FormControl
   //this.searchControl = new FormControl();

   //load Places Autocomplete
  //  this.mapsAPILoader.load().then(() => {
  //      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //        types: ["address"]
  //      });
  //      autocomplete.addListener("place_changed", () => {
  //        this.ngZone.run(() => {
  //          //get the place result
  //          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
   //
  //          //verify result
  //          if (place.geometry === undefined || place.geometry === null) {
  //            return;
  //          }
   //
  //        });
  //      });
  //    });
}

  onType(city:string){

      this._wService.getCitiesByName(city)
      .subscribe(data => {this.searchData = data;},
                 error =>  this.errorMessage = <any>error,
               );
      this.dataService = this.completerService.local(this.searchData, 'description', 'description');
    // this.elRef.nativeElement.querySelector('.location_icon').addEventHandler('click', alert('hi'));

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
  getDateTime(timeinMS:number){
    return Date();
  }
}
