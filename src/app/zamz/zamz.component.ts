import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-zamz',
  templateUrl: './zamz.component.html',
  styleUrls: ['./zamz.component.css']
})
export class ZamzComponent implements OnInit {
  zamz:Quote[] = [
  new Quote(1,'Sam Kiprono', "Think big and dont listen to people who tell you it cant be done."),
  new Quote(2,'Andre Azu', 'We become what we think about.'),
  new Quote(3,'John Kabuga', 'The person who says it cannot be done should not interrupt the person who is doing it.'),
  
];

toggleDetails(index: number){
  this.zamz[index].showQuote = !this.zamz[index].showQuote;
}

  constructor() { }

  ngOnInit() {
  }

}
