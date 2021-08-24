import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-zamz',
  templateUrl: './zamz.component.html',
  styleUrls: ['./zamz.component.css']
})
export class ZamzComponent implements OnInit {
  zamz:Quote[] = [
  new Quote(1,'Sam Kiprono','faith', 'Think big and dont listen to people who tell you it cant be done.'),
  new Quote(2,'Andre Azu','self knowledge', 'We become what we think about.'),
  new Quote(3,'John Kabuga','endurance', 'The person who says it cannot be done should not interrupt the person who is doing it.'),
  
];

    addNewQuote(list: Quote){
    let listLength = this.zamz.length;
    list.id = listLength+1;
    // list.completeDate = new Date(goal.completeDate)
    this.zamz.push(list)
  }

   toggleDetails(index: number){
   this.zamz[index].showQuote = !this.zamz[index].showQuote;
 }
  quoteDelete(isComplete: boolean, index: number){
  if (isComplete) {
    let toDelete=confirm('are you sure?');
    if (toDelete){
      this.zamz.splice(index,1)
    }
  }
}

  constructor() { }

  ngOnInit() {
  }

}
