import { Component, OnInit, Input} from '@angular/core';
import { Weather } from './weather';

@Component({
  selector: 'items',
  templateUrl:'./items.component.html',
  styleUrls: ['./items.component.css'],
})
export class itemsComponent implements OnInit {
constructor() {}
@Input('WeatherItem') weather: Weather;
ngOnInit() {}

}
