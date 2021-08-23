import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-zamz',
  templateUrl: './zamz.component.html',
  styleUrls: ['./zamz.component.css']
})
export class ZamzComponent implements OnInit {
  zamz:Quote[] = [
  {id:1,author:'Sam Kiprono', quote:"Think big and dont listen to people who tell you it cant be done."},
  {id:2,author:'Andre Azu', quote:'We become what we think about.'},
  {id:3,author:'John Kabuga', quote:'The person who says it cannot be done should not interrupt the person who is doing it.'},
  
];

  constructor() { }

  ngOnInit() {
  }

}
