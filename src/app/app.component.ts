import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-weather-app';
  loct = 'Islamabad'
  temp:number = 15
  min = 10
  max = 20
  humidity = 77
  wind = 60
}
