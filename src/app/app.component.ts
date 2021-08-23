import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zamz:Quote[] = [
    {id:1, name:"Think big and dont listen to people who tell you it cant be done."},
    {id:2,name:'We become what we think about.'},
    {id:3,name:'The person who says it cannot be done should not interrupt the person who is doing it.'},
    
  ];
}