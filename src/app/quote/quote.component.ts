import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'A stich in time saves nine', 'John', 'Johnteez', 0, 0, new Date(2008, 3, 2)),
    new Quote(2, 'What a man can do a woman cannot do', 'Sandy,J.', 'Johnteez', 0, 0, new Date(2019, 6, 30)),
    new Quote(3, 'Love is not reaally blind, just sees one soul. ', 'Jean', 'John', 0, 0, new Date(2004, 7, 9)),
    new Quote(4, 'Home is home.', 'Jim Cartor', 'Johnteez', 0, 0, new Date(2019,1,2)),
    new Quote(5, 'Life is what goes on when we are busy planning for life!', 'Cally James', 'Johnteez', 0, 0, new Date(2005, 2, 2)),

  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`This quote by ${this.quotes[index].name} will be deleted. Continue?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit() {
  }

}