import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'weathers',
  templateUrl:'./weathers.component.html',
  styleUrls: ['./weathers.component.css'],
})
export class weathersComponent implements OnInit {
  @Input('WeatherForecastList') weathers: any;
constructor() {}

ngOnInit() {}

}
