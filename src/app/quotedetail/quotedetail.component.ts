import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent implements OnInit {
  @Input()
  list!: Quote;

  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  buttonAdd: number = 0

  buttonLess: number = 0

  addLike(){
    this.buttonAdd ++
  }

  lessLike(){
    this.buttonLess --
  }
  
  constructor() { }

  ngOnInit() {
  }

}
