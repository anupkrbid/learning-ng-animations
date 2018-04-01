import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedState', [
      state ('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px'
      })),
      state ('clicked', style({
        backgroundColor: 'blue',
        width: '300px',
        height: '50px'
      })),
      state ('mousedown', style({
        backgroundColor: 'red',
        border: '1px solid black',
        width: '100px',
        height: '100px'
      })),
      transition('default => clicked', animate('1000ms 500ms ease-in')),
      transition('clicked => default', animate(300)),
      transition('clicked <=> mousedown', animate(300))
    ]),
    trigger('numberEnteredState', [
      state('unselected', style({
        border: '1px solid black',
        padding: '5px'
      })),
      state('selected', style({
        border: '2px solid blue',
        padding: '4px',
        backgroundColor: 'lightblue'
      })),
      transition('unselected => selected', [
        style({
          border: '2px solid black',
          padding: '4px'
        }),
        animate('300ms 100ms ease-out', style({
          backgroundColor: 'red'
        })),
        animate(300),
      ])
    ])
  ]
})
export class AppComponent {
  clickInfo = 'default';
  numberEntered: number;
  arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  onClickSimple() {
      this.clickInfo = 'clicked';
      setTimeout(() => {
          this.clickInfo = 'default';
      }, 3000);
  }
}
