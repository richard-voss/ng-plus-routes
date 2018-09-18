import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'routes-random-gif',
  templateUrl: './random-gif.component.html',
  styleUrls: ['./random-gif.component.scss']
})
export class RandomGifComponent implements OnInit {

  readonly urls = [
    'https://giphy.com/embed/3o6Zt6ML6BklcajjsA',
    'https://giphy.com/embed/l4FsIC6XXeS0wGIBG',
    'https://giphy.com/embed/mq5y2jHRCAqMo',
    'https://giphy.com/embed/26u6bnal23NhnIoZG',
    'https://giphy.com/embed/Jalikml2XiUgw',
    'https://giphy.com/embed/3oxRmGNqKwCzJ0AwPC',
    'https://giphy.com/embed/bxZUJhtAMmOnm',
    'https://giphy.com/embed/nIc3xUWWpfamI',
  ];

  url: string;

  ngOnInit() {
    this.url = this.urls[Math.floor(Math.random() * this.urls.length)];
  }
}
