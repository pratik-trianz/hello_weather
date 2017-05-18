import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const APPID = 'e1102a613d38b68dc9569ccd1bb47651';

@Injectable()
export class WeatherService {

  private baseUrl='http://api.openweathermap.org/data/2.5/';

  constructor(private http: Http) { }

  getCities(txt:string):Observable<any[]>{
    return this.http.get('http://maps.googleapis.com/maps/api/place/autocomplete/json?input=nagpur&types=(cities)&key=AIzaSyB4GAtTvQUikqO1nBfXMF2YTYPIKj3yfE4')
    .map(response => response.json())
    .catch(this.handleExcep);
  }

  getWeather(city:string): Observable<any[]>{
    return this.http.get(this.baseUrl+'weather?q='+ city +'&appid='+ APPID +'&units=metric')
    .map(response => response.json())
    .catch(this.handleExcep);
  }

  getWeatherForecast(city:string): Observable<any[]>{
    return this.http.get(this.baseUrl+'forecast?q='+ city +'&appid='+ APPID +'&units=metric')
    .map(response => this.listData(response))
    .catch(this.handleExcep);
  }

  private listData(res: any) {
    let body = res.json();
    return body.list || { };
  }

  private handleExcep (error: any) {
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    return Observable.throw(errMsg);
  }

}
