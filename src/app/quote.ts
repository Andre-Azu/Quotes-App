
export class Quote {
  showQuote: boolean;
  constructor(public id: number,public topic:string, public quote: string){
    this.showQuote=false;
  }
} 