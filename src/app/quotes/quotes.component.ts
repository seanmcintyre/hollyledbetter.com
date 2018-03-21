import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quote: Quote;
  quotes: Array<Quote> = [
    {
      speaker: 'Chögyam Trungpa',
      text: 'Don’t try to be the fastest.'
    },
    {
      speaker: 'Thích Nhất Hạnh',
      text: 'Enlightenment, for a wave in the ocean, is the moment the wave realizes it is water.'
    },
    {
      speaker: 'Pema Chödrön',
      text: 'Only to the extent that we expose ourselves over and over to annihilation can that which is indestructible in us be found.'
    }
  ];

  getQuote() {
    const q = this.quotes;
    return q[Math.floor(Math.random() * q.length)];
  }

  ngOnInit() {
    this.quote = this.getQuote();
  }

}
