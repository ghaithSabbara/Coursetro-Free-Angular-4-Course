import { Component } from '@angular/core';
import {DataService} from './components101/data.service';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger ('myAwesomeAnimation',[
      state('small', style({
        transform: 'scale(1)',
    })),
      state('large', style({
        transform: 'scale(1.2)',
    })),
    transition('small <=> large', animate('2200ms ease-in',keyframes ([
      style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
      style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
      style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
    ])))    
    ]),
  ]
})
export class AppComponent {
  title = 'app';
  myVar = ['he', 'she', 'it'];
  ok = false;
  angularLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXc8kOGF_wlhqYGmXH1S1GIuhH_3y3SNwvtOWAorISkC1bHCqp';
  buttonStatus = true;
  myEvent (event){
    console.log (event);
  }

  titleClass = 'red-title';
  titleClasses = {
    'red-title': true,
    'large-title': true
  }
  titleStyle = 'red';
  style = false;
  styles = {
    'color': 'green',
    'font-size': '4em'
  }

  constructor(private dataService:DataService) { }
  someProperty: string = '';
  state: string = 'small';
  ngOnInit() {
    console.log (this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
